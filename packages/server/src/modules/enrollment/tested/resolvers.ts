import { ResolverMap } from "../../../types/graphql-utils";
import { Enrollment } from "../../../entity/Enrollment";
import { notFoundError } from "../../constant/errorMessages";

const ErrorResponse = [{
  path: "Enrollment",
  message: notFoundError
}];

export const resolvers: ResolverMap = {
  Enrollment: {
    course: ({ courseId }, _, { courseLoader }) => courseLoader.load(courseId),
    owner: ({ userId }, _, { userLoader }) => userLoader.load(userId)
  },
  Query: {
    testedEnrollments: async (_, { offset, limit }, { session }) => {
      const enrollments = Enrollment.find({ 
        skip: offset,
        take: limit,
        where: {  
          userId: session.userId,
          tested: true
        },
        order: {
          createdOn: "DESC"
        }
      });

      if (!enrollments) {
        return { errors: ErrorResponse };
      }

      return enrollments;
    }
  }
};
