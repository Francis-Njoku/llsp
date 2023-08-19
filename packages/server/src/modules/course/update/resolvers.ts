import * as moment from 'moment';
import { getConnection } from "typeorm";

import { ResolverMap } from "../../../types/graphql-utils";
import { Course } from "../../../entity/Course";
import { invalidUser } from "../../constant/errorMessages";
import { courseCacheKey } from "../../../constants";

const AccessResponse = [{
    path: "course",
    message: invalidUser
}];

export const resolvers: ResolverMap = {
  Mutation: {
    updateCourse: async (_, { courseId, input: { ...data } }, { session, redis }) => {
      if (session.userRole !== "admin") {
        return { errors: AccessResponse };
      }

      const { raw: [newCourse] } = await getConnection()
        .createQueryBuilder()
        .update(Course)
        .set({
          ...data,
          updatedAt: moment().format('LLL')
        })
        .where("id = :id", { id: courseId })
        .returning("*")
        .execute();

        const courses = await redis.lrange(courseCacheKey, 0, -1);
        const idx = courses.findIndex(
          (x: string) => JSON.parse(x).id === courseId
        );

      // 2. user remove picture
      // 3. do nothing

      await redis.lset(
        courseCacheKey, 
        idx, 
        JSON.stringify(newCourse)
      );

      return { message: "Course updated successfully!" };
    }
  }
};
