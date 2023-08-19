import { ResolverMap } from "../../../types/graphql-utils";
import { Enrollment } from "../../../entity/Enrollment";
import { invalidUser, notFoundError } from "../../constant/errorMessages";

const AccessResponse = [{
    path: "User",
    message: invalidUser
}];

const ErrorResponse = [{
    path: "Enrollment",
    message: notFoundError
}];

export const resolvers: ResolverMap = {
    Mutation: {
        deleteEnrollment: async (_, { id }, { session }) => {
        const enrollment = await Enrollment.findOne({ where: { id } });

        if (!enrollment) {
            return { errors: ErrorResponse };
        }

        if (session.userId !== enrollment.userId) {
            console.log(
                `This user ${session.userId} is trying to delete an enrollment they don't own`
            );
            
            return { errors: AccessResponse };
        }

        await Enrollment.remove(enrollment);

        return {message: "Enrollment removed success!"};
        }
    }
};