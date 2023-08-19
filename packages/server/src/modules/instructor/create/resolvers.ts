import { DateTime } from 'luxon';
import { getErrors } from '../../getErrors';
import { ResolverMap } from "../../../types/graphql-utils";
import { Instructor } from "../../../entity/Instructor";

export const resolvers: ResolverMap = {
    Mutation: {
        createInstructor: async (
            _, 
            args: GQL.ICreateInstructorOnMutationArguments, 
            { session } 
        ) => {
            if (session.userRole !== 'admin') {
                return getErrors('userRole', 'You are not authorized to create an Instructor!');
            };

            const { name, linkedInUrl, title, description } = args;
        
            await Instructor.create({
                name,
                linkedInUrl, 
                title,
                description,
                userId: session.userId,
                createdOn: DateTime.local().toLocaleString(DateTime.DATETIME_SHORT)
            }).save();

            return { message: 'Instructor created successfully' };
        }
    }
};