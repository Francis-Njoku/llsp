import { ResolverMap } from "../../../types/graphql-utils";
import { Course } from "../../../entity/Course";
import { notFoundError } from "../../constant/errorMessages";

const InvalidResponse = [{
  path: "course",
  message: notFoundError
}];

export const resolvers: ResolverMap = {
  Query: {
    viewCourse: async (_, { id }) => {
      const course = await Course.findOne({ where: { id } });

      if (!course) {
        return { errors: InvalidResponse };
      }
      
      return course;
    }
  }
};
