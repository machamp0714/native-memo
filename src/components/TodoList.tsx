import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
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
      title: 'メモ１',
      content: '文章が入ります。文章が入ります。',
      createdAt: 1585574700000
    },
    {
      id: 2,
      title: 'メモ２',
      content: '文章が入ります。文章が入ります。',
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
          <Text style={styles.createdAt}>作成日時: {format(todo.createdAt, 'yyyy.MM.dd HH:mm')}</Text>
        </Card>
      ))}
    </>
  )
}

const styles = StyleSheet.create({
  createdAt: {
    color: '#999',
    marginTop: 20,
    textAlign: 'right'
  }
});

export default TodoList;