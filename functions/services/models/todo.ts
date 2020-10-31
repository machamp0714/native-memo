import { firestore } from 'firebase/app';

export type ToDo = {
  id?: string;
  title: string;
  content: string;
  createdAt: firestore.Timestamp | null;
}
