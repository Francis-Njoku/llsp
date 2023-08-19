import { ResolverMap } from "../../../types/graphql-utils";
import { Instructor } from "../../../entity/Instructor";
import { getErrors } from '../../getErrors';

export const resolvers: ResolverMap = {
  Instructor: {
    createdBy: ({ userId }, _, { userLoader }) => userLoader.load(userId)
  },
  Query: {
    findInstructors: async () => {
      const instructors = await Instructor.find();

      if (!instructors) {
        return getErrors('instructors', 'instructors do not exist!');
      }
      
      return instructors;
    }
  }
};