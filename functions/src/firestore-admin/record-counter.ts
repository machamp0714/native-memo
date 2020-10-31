import admin from 'firebase-admin';
import { collectionName } from '../services/constants';

export const addCounter = async( 
  db: admin.firestore.Firestore,
  colName: string,
  count = 1
) => {
  const doc = db.collection(collectionName.docCounters).doc(colName);
  await doc.set({
    count: admin.firestore.FieldValue.increment(count),
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  }),
  { merge: true } // data引数で指定された値のみ更新する。SetOptions
}
