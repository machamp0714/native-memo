export const ADD = 'ADD';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

export interface ToDoPrams {
  title: string
  content: string
}

export const addToDo = (params: ToDoPrams) => ({
  type: ADD as typeof ADD,
  payload: { params }
});

export const updateToDo = (id: number, params: ToDoPrams) => ({
  type: UPDATE as typeof UPDATE,
  payload: { id, params }
});

export const deleteToDo = (id: number) => ({
  type: DELETE as typeof DELETE,
  payload: { id }
});
