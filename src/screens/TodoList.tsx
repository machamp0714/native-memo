import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text } from 'react-native';
import { Card, Header, Icon } from 'react-native-elements'
import format from 'date-fns/format';

import { ToDo } from '../services/models/todo';

interface ToDoListProps {
  todos: ToDo[],
  loading: boolean
}

const ToDoList: FC<ToDoListProps> = ({ todos, loading }) => {
  const navigation = useNavigation();
  
  return (
    <>
      <Header
        centerComponent={{ text: 'メモ一覧', style: { color: '#fff', fontWeight: 'bold' } }}
        rightComponent={<Icon name='add' type='material' color='#fff' onPress={() => navigation.navigate('Add')} />}
      />
      {todos.length ? 
        todos.map(todo => (
          <Card key={todo.id}>
            <Card.Title onPress={() => navigation.navigate('ToDo', {todo: todo})}>{todo.title}</Card.Title>
            <Card.Divider />
            <Text>{todo.content}</Text>
          </Card>
        )) :
        <Text>メモがありません</Text>
      }
    </>
  )
}

const styles = StyleSheet.create({
  addButton: {
    textAlign: 'right'
  },
  createdAt: {
    color: '#999',
    marginTop: 20,
    textAlign: 'right'
  }
});

export default ToDoList;