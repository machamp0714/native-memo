import React, { FC } from 'react';
import ToDoList from '../screens/TodoList';
import useToDos from '../hooks/use-todos';

const ToDoListContainer: FC = () => {
  const { todos, loading } = useToDos();

  return <ToDoList todos={todos} loading={loading} />
}

export default ToDoListContainer;
