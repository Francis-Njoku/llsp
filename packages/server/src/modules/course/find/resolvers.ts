import { ResolverMap } from "../../../types/graphql-utils";
import { Course } from "../../../entity/Course";
import { getErrors } from '../../getErrors';

export const resolvers: ResolverMap = {
  Course: {
    instructor: ({ instructorId }, _, { instructorLoader }) => instructorLoader.load(instructorId),
    createdBy: ({ userId }, _, { userLoader }) => userLoader.load(userId)
  },
  Query: {
    findCourses: async (_, { offset, limit }) => {
      const courses = await Course.find({
        skip: offset,
        take: limit,
        order: {
          createdOn: "DESC"
        }
      });

      if (!courses) {
        return getErrors('courses', 'courses do not exist!');
      }
      
      return courses;
    }
  }
};