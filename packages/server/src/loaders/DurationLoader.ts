import * as DataLoader from 'dataloader';
import { Duration } from "../entity/Duration";

type BatchDuration = (ids: string[]) => Promise<Duration[]>;

const batchDurations: BatchDuration = async ids => {
  // 1 sql call
  // to get all durations
  const durations = await Duration.findByIds(ids);

  const durationMap: { [key: string]: Duration } = {};
  durations.forEach(d => {
    durationMap[d.id] = d;
  });

  return ids.map(id => durationMap[id]);
};

export const durationLoader = () => new DataLoader<string, Duration>(batchDurations as any);