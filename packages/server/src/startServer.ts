import "reflect-metadata";
import "dotenv/config";
import { GraphQLServer } from "graphql-yoga";
import * as session from "express-session";
import * as connectRedis from "connect-redis";
import * as RateLimit from "express-rate-limit";
import * as RateLimitRedisStore from "rate-limit-redis";
import { applyMiddleware } from "graphql-middleware";
import * as express from "express";
import { RedisPubSub } from "graphql-redis-subscriptions";

import { redis } from "./redis";
import { createTypeormConn } from "./utils/createTypeormConn";
import { confirmEmail } from "./routes/confirmEmail";
import { genSchema } from "./utils/genSchema";
import { redisSessionPrefix } from "./constants";
import { createTestConn } from "./testUtils/createTestConn";
import { middleware } from "./middleware";

import { 
  courseCacheKey,
  instructorCacheKey
} from "./constants";

import { Course } from "./entity/Course";
import { Instructor } from "./entity/Instructor";

import { userLoader } from "./loaders/UserLoader";
import { instructorLoader } from "./loaders/InstructorLoader";
import { durationLoader } from "./loaders/DurationLoader";
import { courseLoader } from "./loaders/CourseLoader";
import { transactionLoader } from "./loaders/TransactionLoader";
import { reviewLoader } from "./loaders/ReviewLoader";

const SESSION_SECRET = "rtolfciutensqla";
const RedisStore = connectRedis(session as any);

export const startServer = async () => {
  if (process.env.NODE_ENV === "test") {
    await redis.flushall();
  }

  const schema = genSchema() as any;
  applyMiddleware(schema, middleware);

  const pubsub = new RedisPubSub(
    process.env.NODE_ENV === "production"
      ? {
          connection: process.env.REDIS_URL as any
        }
      : {}
  );

  // const pubsub = new PubSub();

  const server = new GraphQLServer({
    schema,
    context: ({ request, response }) => ({
      redis,
      url: request ? request.protocol + "://" + request.get("host") : "",
      session: request ? request.session : undefined,
      req: request,
      res: response,
      userLoader: userLoader(),
      instructorLoader: instructorLoader(),
      durationLoader: durationLoader(),
      transactionLoader: transactionLoader(),
      courseLoader: courseLoader(),
      reviewLoader: reviewLoader(),
      pubsub
    })
  });

  server.express.use(
    RateLimit({
      store: new RateLimitRedisStore({
        client: redis
      }),
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
      // delayMs: 0 // disable delaying - full speed until the max limit is reached
    })
  );

  server.express.use(
    session({
      store: new RedisStore({
        client: redis as any,
        prefix: redisSessionPrefix
      }),
      name: "qid",
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        // secure: process.env.NODE_ENV === "production",
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
      }
    } as any)
  );

  server.express.use("/images", express.static("images"));

  const cors = {
    credentials: true,
    origin:
      process.env.NODE_ENV === "test"
        ? "*"
        : (process.env.FRONTEND_HOST as string)
  };

  server.express.get("/confirm/:id", confirmEmail);


  const conn = await createTypeormConn();

  if (process.env.NODE_ENV === "test") {
    await createTestConn(true);
  } else {
    conn;
    // await conn.runMigrations();
  }

  // clear cache
  await redis.del(
    courseCacheKey,
    instructorCacheKey
  );

  // fill cache
  const courses = await Course.find();
  const instructors = await Instructor.find();

  const courseStrings = courses.map(x => JSON.stringify(x));
  const instructorStrings = instructors.map(x => JSON.stringify(x));

  await [
    redis.lpush( courseCacheKey, ...courseStrings ),
    redis.lpush( instructorCacheKey, ...instructorStrings )
  ];

  const port = process.env.PORT || 4000;
  const app = await server.start({
    cors,
    port: process.env.NODE_ENV === "test" ? 0 : port
  });
  console.log("Server is running on localhost:4000");

  return app;
};
