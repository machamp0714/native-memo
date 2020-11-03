import admin from 'firebase-admin';

import { collectionName } from '../services/constants';
import { Feed } from '../services/models/feed';

export const saveFeed = async(
  db: admin.firestore.Firestore,
  feeds: Feed[],
  publisher: string
) => {
  const feedRef = db.collection(collectionName.feeds);
  const query = await feedRef.where('publisher', '==', publisher).get();
  const exsitingFeeds = query.docs.map(doc => doc.data() as Feed);
  let count = 0;

  for await (const feed of feeds) {
    if (exsitingFeeds.some(f => f.title === feed.title)) {
      continue;
    } else {
      await feedRef.doc().set({
        ...feed,
        fetchedAt: admin.firestore.Timestamp.fromDate(new Date(0)),
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      });
      count += 1;
    }
  }

  return count;
}
