import { ToDo } from '../screens/ToDoList';

export const ADD = 'ADD';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

export interface ToDoPrams {
  title: string
  content: string,
  createdAt: number
}

export const addToDo = (params: ToDoPrams) => {
  const id = 1;
  const todo: ToDo = { ...params, id: id }
  return {
    type: ADD as typeof ADD,
    payload: { todo }
  }
}

export const updateToDo = (id: number, params: ToDoPrams) => ({
  type: UPDATE as typeof UPDATE,
  payload: { id, params }
});

export const deleteToDo = (id: number) => ({
  type: DELETE as typeof DELETE,
  payload: { id }
});

export type ToDoAction =
  | ReturnType<typeof addToDo>
  | ReturnType<typeof updateToDo>
  | ReturnType<typeof deleteToDo>
