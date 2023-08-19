import * as DataLoader from 'dataloader';
import { Review } from "../entity/Review";

type BatchReview = (ids: string[]) => Promise<Review[]>;

const batchReviews: BatchReview = async ids => {
  // 1 sql call
  // to get all reviews
  const reviews = await Review.findByIds(ids);

  const reviewMap: { [key: string]: Review } = {};
  reviews.forEach(r => {
    reviewMap[r.id] = r;
  });

  return ids.map(id => reviewMap[id]);
};

export const reviewLoader = () => new DataLoader<string, Review>(batchReviews as any);