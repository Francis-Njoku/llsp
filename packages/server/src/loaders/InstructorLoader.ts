import * as DataLoader from 'dataloader';
import { Instructor } from "../entity/Instructor";

type BatchInstructor = (ids: string[]) => Promise<Instructor[]>;

const batchInstructors: BatchInstructor = async ids => {
  // 1 sql call
  // to get all instructors
  const instructors = await Instructor.findByIds(ids);

  const instructorMap: { [key: string]: Instructor } = {};
  instructors.forEach(i => {
    instructorMap[i.id] = i;
  });

  return ids.map(id => instructorMap[id]);
};

export const instructorLoader = () => new DataLoader<string, Instructor>(batchInstructors as any);