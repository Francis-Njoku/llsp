import * as DataLoader from 'dataloader';
import { Bookmark } from "../entity/Bookmark";

type BatchBookmark = (ids: string[]) => Promise<Bookmark[]>;

const batchBookmarks: BatchBookmark = async ids => {
  // 1 sql call
  // to get all bookmarks
  const bookmarks = await Bookmark.findByIds(ids);

  const bookmarkMap: { [key: string]: Bookmark } = {};
  bookmarks.forEach(b => {
    bookmarkMap[b.id] = b;
  });

  return ids.map(id => bookmarkMap[id]);
};

export const bookmarkLoader = () => new DataLoader<string, Bookmark>(batchBookmarks as any);