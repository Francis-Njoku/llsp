import { ResolverMap } from "../../../types/graphql-utils";
import { PUBSUB_NEW_ENROLLMENT } from "../../shared/constants";

export const resolvers: ResolverMap = {
  Subscription: {
    newEnrollment: {
      subscribe: (_, __, { pubsub }) => {
        return pubsub.asyncIterator(PUBSUB_NEW_ENROLLMENT)
      }
    }
  }
};
