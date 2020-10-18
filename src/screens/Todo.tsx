import React, { FC } from 'react';
import { Card } from 'react-native-elements';
import { StyleSheet, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import format from 'date-fns/format';

type TodoStackParamList = {
  ToDo: {
    todo: {
      title: string
      content: string
      createdAt: number
    }
  }
}

type TodoScreenRouteProp = RouteProp<TodoStackParamList, 'ToDo'>

type Props = { route: TodoScreenRouteProp }

const Todo: FC<Props> = ({ route }) => {
  const { title, content, createdAt } = route.params.todo;

  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <Card.Divider />
      <Text>{content}</Text>
      <Text style={styles.createdAt}>作成日時: {format(createdAt, 'yyyy.MM.dd HH:mm')}</Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  createdAt: {
    color: '#999',
    marginTop: 20,
    textAlign: 'right'
  }
});

export default Todo;
