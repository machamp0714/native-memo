import firebase from 'firebase/app';

export type ToDo = {
  id?: string;
  title: string;
  content: string;
  createdAt: firebase.firestore.Timestamp | null;
}
