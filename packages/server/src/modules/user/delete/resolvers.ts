import { ResolverMap } from "../../../types/graphql-utils";
import { User } from "../../../entity/User";
import { AccessCode } from "../../../entity/AccessCode";
import { Enrollment } from "../../../entity/Enrollment";
import { invalidUser, notFoundError } from "../../constant/errorMessages";

const AccessResponse = [{
    path: "user",
    message: invalidUser
}];

const ErrorResponse = [{
    path: "account",
    message: notFoundError
}];

export const resolvers: ResolverMap = {
    Mutation: {
        deleteAccount: async (_, { id }, { session }) => {
            const user = await User.findOne({ where: { id } });
            const accessCode = await AccessCode.find({ where: { userId: user?.id } });
            const enrollment = await Enrollment.find({ where: { userId: user?.id } });

            if (!user || !accessCode || !enrollment) {
                return { errors: ErrorResponse };
            }

            if (session.userId !== user.id) {
                console.log(
                    `This user ${session.userId} is trying to delete an account they don't own`
                );
                
                return { errors: AccessResponse };
            }

            await AccessCode.remove(accessCode);
            await Enrollment.remove(enrollment);
            await User.remove(user);

            return {message: "Account deleted successfully!"};
        }
    }
};