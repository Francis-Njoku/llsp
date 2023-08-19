import { ResolverMap } from "../../types/graphql-utils";
import { sendFeedbackEmail } from '../../utils/sendEmail';

export const resolvers: ResolverMap = {
    Mutation: {
        sendMessage: async (_, { input: { name, email, subject, message } }) => {
            const sub: string = `${subject}`;
            const emailBody: string = `
                <p>${name}</p>
                <p>${email}</p>
                <p>${message}</p>
            `;

            await sendFeedbackEmail(
                "contact@lspr.ng", 
                `Contact Form: ${sub}`, 
                emailBody
            );

            return { message: "Message successfully sent!" };
        }
    }
};