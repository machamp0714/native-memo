import React, { FC } from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements'
import format from 'date-fns/format';

interface ToDo {
  id: number
  title: string
  content: string
  createdAt: number
}

const TodoList: FC = () => {
  const todos: ToDo[] = [
    {
      id: 1,
      title: 'bleach',
      content: '広告数カウント',
      createdAt: 1585574700000
    },
    {
      id: 2,
      title: 'nikkol',
      content: 'コンテンツ移管',
      createdAt: 1585567500000
    }
  ];

  return (
    <>
      {todos.map(todo => (
        <Card key={todo.id}>
          <Card.Title>{todo.title}</Card.Title>
          <Card.Divider />
          <Text>{todo.content}</Text>
          <Text>作成日時: {format(todo.createdAt, 'yyyy.MM.dd HH:mm')}</Text>
        </Card>
      ))}
    </>
  )
}

export default TodoList;