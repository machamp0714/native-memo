import firebase from 'firebase/app';

export type ToDo = {
  title: string;
  content: string,
  createdAt: firebase.firestore.Timestamp | null;
  updatedAt: firebase.firestore.Timestamp | null;
};
