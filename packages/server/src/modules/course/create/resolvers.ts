import { DateTime } from 'luxon';
import { getErrors } from '../../getErrors';
import { ResolverMap } from "../../../types/graphql-utils";
import { Course } from "../../../entity/Course";

export const resolvers: ResolverMap = {
    Mutation: {
        createCourse: async (_,  args: GQL.ICreateCourseOnMutationArguments, { session } ) => {
            if (session.userRole !== 'admin') {
                return getErrors('userRole', 'You are not authorized to create a course!');
            };

            const { 
                title, 
                summary,
                description, 
                duration, 
                type, 
                price, 
                discount, 
                instructorId, 
                bespokeAvailability,
                assessmentType,
                learningObjectives,
                trainingDates,
                link,
                venue
            } = args;
        
            await Course.create({
                title,
                summary,
                description,
                duration,
                type,
                price,
                discount: discount ? discount : price,
                instructorId,
                bespokeAvailability,
                assessmentType,
                learningObjectives,
                trainingDates,
                link,
                venue,
                userId: session.userId,
                createdOn: DateTime.local().toLocaleString(DateTime.DATETIME_SHORT)
            }).save();

            return { message: 'Course created successfully' };
        }
    }
};