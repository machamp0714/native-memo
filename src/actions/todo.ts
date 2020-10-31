import { ToDo } from '../screens/ToDoList';

export const ADD = 'ADD';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

export interface ToDoParams {
  title: string
  content: string
}

export const addToDo = (latestToDo: ToDo, params: ToDoParams) => {
  const id = latestToDo ? latestToDo.id + 1 : 1
  const todo: ToDo = { ...params, id: id, createdAt: Date.now() }
  return {
    type: ADD as typeof ADD,
    payload: { todo }
  }
}

export const updateToDo = (id: number, params: ToDoParams) => ({
  type: UPDATE as typeof UPDATE,
  payload: { id, params }
});

export const deleteToDo = (id: number) => ({
  type: DELETE as typeof DELETE,
  payload: { id }
});

export type ToDoAction =
  | ReturnType<typeof addToDo> // ReturnTypeは、その名の通り関数をの返り値の型をを返す
  | ReturnType<typeof updateToDo>
  | ReturnType<typeof deleteToDo>
