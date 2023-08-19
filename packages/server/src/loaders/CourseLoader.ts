import * as DataLoader from 'dataloader';
import { Course } from "../entity/Course";

type BatchCourse = (ids: string[]) => Promise<Course[]>;

const batchCourses: BatchCourse = async ids => {
  // 1 sql call
  // to get all courses
  const courses = await Course.findByIds(ids);

  const courseMap: { [key: string]: Course } = {};
  courses.forEach(c => {
    courseMap[c.id] = c;
  });

  return ids.map(id => courseMap[id]);
};

export const courseLoader = () => new DataLoader<string, Course>(batchCourses as any);