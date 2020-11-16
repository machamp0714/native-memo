import { createContext } from 'react';
import firebase from 'firebase/app';

type firebaseContextValue = {
  db: firebase.firestore.Firestore | null
}

export const firebaseContext = createContext<firebaseContextValue>({
  db: null
});
