import { ResolverMap } from "../../../types/graphql-utils";
import { Enrollment } from "../../../entity/Enrollment";
import { getConnection } from "typeorm";

export const resolvers: ResolverMap = {
  Query: {
    searchEnrollments: async (_, { input: { courseId }, limit, offset }) => {
      let enrollmentQB = getConnection()
        .getRepository(Enrollment)
        .createQueryBuilder("e")
        .where("e.courseId = :courseId", { courseId })

      return enrollmentQB
        .take(limit)
        .skip(offset)
        .getMany();
    }
  }
};