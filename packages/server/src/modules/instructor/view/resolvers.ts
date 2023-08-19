import { ResolverMap } from "../../../types/graphql-utils";
import { Instructor } from "../../../entity/Instructor";
import { notFoundError } from "../../constant/errorMessages";

const InvalidResponse = [{
  path: "instructor",
  message: notFoundError
}];

export const resolvers: ResolverMap = {
  Query: {
    viewInstructor: async (_, { id }) => {
      const instructor = await Instructor.findOne({ where: { id } });

      if (!instructor) {
        return { errors: InvalidResponse };
      }
      
      return instructor;
    }
  }
};
