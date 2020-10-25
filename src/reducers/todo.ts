import { Reducer } from 'redux';
import { ToDo } from '../screens/ToDoList';
import { ToDoAction, ADD, UPDATE } from '../actions/todo';

export interface ToDoState {
  todos: ToDo[]
}

export const initState: ToDoState = {
  todos: []
}

const ToDoReducer: Reducer<ToDoState, ToDoAction> =
  (state: ToDoState = initState, action: ToDoAction): ToDoState => {
    switch (action.type) {
      case ADD:
        return {
          ...state,
          todos: [...state.todos, action.payload.todo]
        }
      case UPDATE:
        return {
          ...state,
          todos: state.todos.map((todo) => (
            todo.id === action.payload.id ? { ...action.payload.params, id: todo.id, createdAt: todo.createdAt } : todo
          ))
        }
      default:
        return state
    }
}

export default ToDoReducer;
