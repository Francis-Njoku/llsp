import * as bcrypt from "bcryptjs";
import * as moment from 'moment';

import { ResolverMap } from "../../types/graphql-utils";
import { User, Role } from '../../entity/User';
import { Transaction, Status } from "../../entity/Transaction";
import { Course } from "../../entity/Course";
// import { transactionCacheKey } from '../../../constants';
import { createConfirmEmailLink } from "../user/register/createConfirmEmailLink";
import { sendEmail, sendFeedbackEmail } from "../../utils/sendEmail";
import { maxFund, notFoundError } from "../constant/errorMessages";
import { AccessCode } from '../../entity/AccessCode';
import { Enrollment } from "../../entity/Enrollment";
// import { PUBSUB_NEW_NOTIFICATION, PUBSUB_NEW_TRANSACTION } from '../../shared/constants';

const InvalidResponse = [{
    path: "course",
    message: notFoundError
}];

const ErrorResponse = [{
    path: "payment",
    message: maxFund
}];

export const resolvers: ResolverMap = {
    Mutation: {
        initiatePayment: async (_, { id, email, firstname, lastname, phone, amount, reference }, { redis, url } ) => {
            const userAlreadyExists = await User.findOne({
                where: { email },
                select: ["id"]
            });

            const ihashedPassword = await bcrypt.hash("password", 10);
            if(!userAlreadyExists){
                const newUser = User.create({
                    email: email.toLowerCase(),
                    firstname,
                    lastname,
                    phone,
                    password: ihashedPassword,
                    role: Role.Individual,
                    createdOn: moment().format('LLL')
                });
                await newUser.save();
            }

            const sessionUser = await User.findOne({ where: { email } });
            const course = await Course.findOne({ where: { id } });

            const genString = Math.random().toString(36).substring(2);

            if (!sessionUser ||!course) {
                return { errors: InvalidResponse };
            }

            if (amount > (course.price - course.discount)) {
                return { errors: ErrorResponse };
            }

            const transaction = await Transaction.create({
                amount,
                reference, 
                reason: `Payment for ${course.title.toUpperCase()}`,
                status: Status.Complete,
                currency: 'NGN',
                userId: sessionUser.id,
                createdOn: moment().format('LLL')
            }).save();

            const accessCode = AccessCode.create({
                code: `cs${genString}lspr`,
                unit: 1,
                amount,
                userId: sessionUser.id,
                createdOn: moment().format('LLL')
            });
            await accessCode.save();

            const enrollment = Enrollment.create({
                courseId: id,
                paid: transaction.amount,
                userId: sessionUser.id,
                createdOn: moment().format('LLL')
            });
            await enrollment.save();

            const hashedPassword = await bcrypt.hash(accessCode.code, 10);
            if(!userAlreadyExists){
                await User.update(
                    { 
                        id: sessionUser.id
                    },
                    {
                        email: email.toLowerCase(),
                        password: hashedPassword,
                        updatedAt: moment().format('LLL')
                    }
                );

                if (process.env.NODE_ENV !== "test") {
                    await sendEmail(
                    email,
                    await createConfirmEmailLink(url, sessionUser.id, email, redis),
                    "Activate my account"
                    );
                }
            }

            const subject: string = 'Welcome to LSPR Nigeria';
            const emailBody: string = `
                <p>Thank you for joining LSPR Nigeria. Congratulations on joining the world's foremost public relations 
                training institute and taking a step to master your Public Relations skills. We're excited for you!</p>

                <p>Our goal is to help you enhance your skills and excel in your career and our <b>${course.title}</b> course is 
                an excellent place to start. This course was curated and will be taught by industry thought leaders with 
                decades of experience in the Public Relations field.</p>
            
                <p>If you don't already have an account with us to access your student dashboard, use your email ${sessionUser.email} 
                and this code <b>${accessCode.code}</b> as the password to log in. Otherwise continue to your account.</p>
            
                <p>This course will be delivered ${course.type} and will commence on <b>${course.trainingDates}</b>. Here's a link 
                <b>${course.link ? course.link : course.venue}</b> to get access.</p>
            
                <p>Best of lucks as you get started. See you in class!</p>
            `;

            await sendFeedbackEmail(
                `${sessionUser.firstname}`, 
                subject, 
                emailBody
            );

            // redis.lpush(
            //     transactionCacheKey, 
            //     JSON.stringify(transaction)
            // );

            return { message: "Course registered successfully!" };
        }
    }
};