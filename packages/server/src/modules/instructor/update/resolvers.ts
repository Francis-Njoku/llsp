import * as moment from 'moment';
import { getConnection } from "typeorm";

import { ResolverMap } from "../../../types/graphql-utils";
import { Instructor } from "../../../entity/Instructor";
import { invalidUser } from "../../constant/errorMessages";
import { instructorCacheKey } from "../../../constants";

const AccessResponse = [{
    path: "instructor",
    message: invalidUser
}];

export const resolvers: ResolverMap = {
  Mutation: {
    updateInstructor: async (_, { instructorId, input: { ...data } }, { session, redis }) => {
      if (session.userRole !== "admin") {
        return { errors: AccessResponse };
      }

      const { raw: [newInstructor] } = await getConnection()
        .createQueryBuilder()
        .update(Instructor)
        .set({
          ...data,
          updatedAt: moment().format('LLL')
        })
        .where("id = :id", { id: instructorId })
        .returning("*")
        .execute();

        const instructors = await redis.lrange(instructorCacheKey, 0, -1);
        const idx = instructors.findIndex(
          (x: string) => JSON.parse(x).id === instructorId
        );

      // 2. user remove picture
      // 3. do nothing

      await redis.lset(
        instructorCacheKey, 
        idx, 
        JSON.stringify(newInstructor)
      );

      return { message: "Instructor updated successfully!" };
    }
  }
};
