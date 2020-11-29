import { useContext, useState, useEffect } from 'react';

import { ToDo } from '../services/models/todo';
import { collectionName } from '../services/constants';
import { FirebaseContext } from '../contexts';

export type todosOptions = {
  limit?: number
}

const defaultOptions: todosOptions = {
  limit: 30
};

const useToDos = (options?: todosOptions) => {
  const [todos, setToDos] = useState<ToDo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchOptions = { ...defaultOptions, ...options };
  const { db } = useContext(FirebaseContext);

  useEffect(() => {
    if (!db) throw new Error('Firestore is not initialized');
    const query = db
      .collection(collectionName.todos)
    
    const load = async () => {
      setLoading(true);
      try {
        const snap = await query.get();
        const todosData = snap.docs.map(doc => ({
          ...(doc.data() as ToDo),
          id: doc.id
        }));
        setToDos(todosData);
        setError(null);
      } catch (err) {
        setError(err)
      }
      setLoading(false)
    }

    load();
  }, []);

  return { todos, loading, error };
}

export default useToDos;
