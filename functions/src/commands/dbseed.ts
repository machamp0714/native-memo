import commander from 'commander';
import admin from 'firebase-admin';
import fs from 'fs';
import parse from 'csv-parse/lib/sync';

import { ToDo } from '../services/models/todo';
import { collectionName } from '../services/constants';
import { addCounter } from '../firestore-admin/record-counter';
import serviceAccount from '../native-memo-61bfc-firebase-adminsdk-3tou1-784622635c.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});
const db = admin.firestore();

const uploadSeed = async (collection: string, seedFile: string) => {
  const buffer = fs.readFileSync(seedFile);
  const records = parse(buffer.toString(), {
    columns: true,
    skip_empty_lines: true
  });
  console.log(records);
  const ref = db.collection(collection);

  switch (collection) {
    case collectionName.todos: {
      const docs: Required<ToDo>[] = records.map((record: ToDo) => ({
        ...record,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      })) || [];

      for await (const doc of docs) {
        const { id, ...docWithoutId } = doc;
        await ref.doc(id).set(docWithoutId);
      }
      await addCounter(db, collection, docs.length);

      return;
    }
    default: {
      throw new Error('specify target collection');
    }
  }
}

commander
  .version('0.1.0', '-v, --version')
  .arguments('<collection> <seedFile>')
  .action(uploadSeed);

commander.parse(process.argv);
