import { ResolverMap } from "../../../types/graphql-utils";
import { Course } from "../../../entity/Course";
import { getErrors } from "../../getErrors";

export const resolvers: ResolverMap = {
    Mutation: {
        deleteCourse: async ( _, { id }, { session } ) => {

        if (session.userRole !== 'admin') {
            return getErrors('userRole', 'You are not authorized to delete a course!');
        };

        const course = await Course.findOne({ where: { id } });

        if (!course) {
            return getErrors('course', 'does not exist');
        }

        if (session.userId !== course.userId) {
            // log message
            console.log(
                `this user ${
                    session.userId
                } is trying to delete a course they don't own`
            );
            return getErrors('user', 'not authorized');
        }

        await Course.remove(course);

        return { message: 'Course deleted successfully' };
        }
    }
};