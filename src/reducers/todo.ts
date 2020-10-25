import { Reducer } from 'redux';
import { ToDo } from '../screens/ToDoList';
import { ToDoAction, ADD } from '../actions/todo';

export interface ToDoState {
  todos: ToDo[]
}

export const initState: ToDoState = {
  todos: [
    {
      id: 1,
      title: 'メモ１',
      content: '文章が入ります。',
      createdAt: 1585574700000
    },
    {
      id: 2,
      title: 'メモ２',
      content: '文章が入ります。文章が入ります。',
      createdAt: 1585567500000
    }
  ]
}

const ToDoReducer: Reducer<ToDoState, ToDoAction> =
  (state: ToDoState = initState, action: ToDoAction): ToDoState => {
    switch (action.type) {
      case ADD:
        return {
          ...state,
          todos: [...state.todos, action.payload.todo]
        }
      default:
        return state
    }
}

export default ToDoReducer;
