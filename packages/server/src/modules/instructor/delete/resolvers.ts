import { ResolverMap } from "../../../types/graphql-utils";
import { Instructor } from "../../../entity/Instructor";
import { getErrors } from "../../getErrors";

export const resolvers: ResolverMap = {
    Mutation: {
        deleteInstructor: async ( _, { id }, { session } ) => {

        if (session.userRole !== 'admin') {
            return getErrors('userRole', 'You are not authorized to delete an instructor!');
        };

        const instructor = await Instructor.findOne({ where: { id } });

        if (!instructor) {
            return getErrors('commodity', 'does not exist');
        }

        if (session.userId !== instructor.userId) {
            // log message
            console.log(
                `this user ${
                    session.userId
                } is trying to delete an instructor they don't own`
            );
            return getErrors('user', 'not authorized');
        }

        await Instructor.remove(instructor);

        return { message: 'Instructor deleted successfully' };
        }
    }
};