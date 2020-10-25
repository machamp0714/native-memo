import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text } from 'react-native';
import { Card, Header, Icon } from 'react-native-elements'
import format from 'date-fns/format';

export interface ToDo {
  id: number
  title: string
  content: string
  createdAt: number | Date
}

interface ToDoListProps {
  todos: ToDo[]
}

const ToDoList: FC<ToDoListProps> = ({ todos }) => {
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
            <Text style={styles.createdAt}>作成日時: {format(todo.createdAt, 'yyyy.MM.dd HH:mm')}</Text>
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