import { ResolverMap } from "../../../types/graphql-utils";
import { User } from "../../../entity/User";

export const resolvers: ResolverMap = {
  User: {
    user: ({ userId }, _, { userLoader }) => userLoader.load(userId),
  },
  Query: {
    findUsers: async () => {
      return User.find();
    }
  }
};