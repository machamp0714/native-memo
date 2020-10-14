import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

interface ToDo {
  id: number
  title: string
  content: string
}

const TodoList: FC = () => {
  const todos: ToDo[] = [
    {
      id: 1,
      title: 'bleach',
      content: '広告数カウント'
    },
    {
      id: 2,
      title: 'nikkol',
      content: 'コンテンツ移管'
    }
  ];

  return (
    <>
      {todos.map(todo => (
        <Card key={todo.id}>
          <Card.Title>{todo.title}</Card.Title>
          <Card.Divider />
          <Text>{todo.content}</Text>
        </Card>
      ))}
    </>
  )
}

export default TodoList;