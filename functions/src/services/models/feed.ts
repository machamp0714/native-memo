import firebase from 'firebase/app';

export type Feed = {
  id?: string;
  title: string | null;
  author: string | null;
  publisher: string | null; releaseDate: string | null;
  isbn: string | null;
  fetchedAt: firebase.firestore.Timestamp | null;
  createdAt: firebase.firestore.Timestamp | null;
};

export const blankFeed: Feed = {
  title: null,
  author: null,
  publisher: null,
  releaseDate: null,
  isbn: null,
  fetchedAt: null,
  createdAt: null,
};