import { ResolverMap } from "../../../types/graphql-utils";
import { User } from "../../../entity/User";
import { DateTime } from "luxon";

export const resolvers: ResolverMap = {
  Mutation: {
    updateUser: async (_, 
      { input: { ...data } },
      { session } 
    ) => {

      await User.update(
        {
          id: session.userId
        },
        {
          ...data,
          updatedAt: DateTime.local().toLocaleString(DateTime.DATETIME_SHORT)
        }
      );

      // Send updated profile message

      return true;
    }
  }
};
