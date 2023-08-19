import { ResolverMap } from "../../../types/graphql-utils";
import { User } from "../../../entity/User";

export const resolvers: ResolverMap = {
  Query: {
    viewUser: async (_, { id }) => {
      return User.findOne({ where: { id } });
    }
  }
};
