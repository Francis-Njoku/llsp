import { getConnectionOptions, createConnection } from "typeorm";
import { User } from "../entity/User";
import { Instructor } from "../entity/Instructor";
import { Duration } from "../entity/Duration";
import { Transaction } from "../entity/Transaction";
import { AccessCode } from "../entity/AccessCode";
import { Course } from "../entity/Course";
import { Review } from "../entity/Review";
import { Enrollment } from "../entity/Enrollment";

export const createTypeormConn = async () => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  return process.env.NODE_ENV === "production"
    ? createConnection({
        ...connectionOptions,
        url: process.env.DATABASE_URL,
        entities: [
          User, Instructor, Duration, Transaction, AccessCode, Course, Review, Enrollment
        ],
        name: "default"
      } as any)
    : createConnection({ ...connectionOptions, name: "default" });
};