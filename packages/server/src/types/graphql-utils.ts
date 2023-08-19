import { Redis } from "ioredis";
import * as express from "express";

import { userLoader } from "../loaders/UserLoader";
import { instructorLoader } from "../loaders/InstructorLoader";
import { durationLoader } from "../loaders/DurationLoader";
import { transactionLoader } from "../loaders/TransactionLoader";
import { courseLoader } from "../loaders/CourseLoader";
import { PubSub } from "graphql-yoga";

export interface Session extends Express.Session {
  userId?: string;
  userEmail?: string;
  userRole?: string;
  name?: string;
}

export interface Context {
  redis: Redis;
  url: string;
  session: Session;
  req: Express.Request;
  res: express.Response;
  userLoader: ReturnType<typeof userLoader>;
  instructorLoader: ReturnType<typeof instructorLoader>;
  durationLoader: ReturnType<typeof durationLoader>;
  transactionLoader: ReturnType<typeof transactionLoader>;
  courseLoader: ReturnType<typeof courseLoader>;
  pubsub: PubSub;
}

export type Resolver = (
  parent: any,
  args: any,
  context: Context,
  info: any
) => any;

export type GraphQLMiddlewareFunc = (
  resolver: Resolver,
  parent: any,
  args: any,
  context: Context,
  info: any
) => any;

export interface ResolverMap {
  [key: string]: {
    [key: string]: Resolver | { [key: string]: Resolver };
  };
}