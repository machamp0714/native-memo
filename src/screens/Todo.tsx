import React, { FC } from 'react';
import { Card, Button } from 'react-native-elements';
import { StyleSheet, View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { ToDoStackParamList } from '../navigators/ToDoNavigator';
import format from 'date-fns/format';
import { ToDo } from './ToDoList';

interface Props {
  route: RouteProp<ToDoStackParamList, 'ToDo'>
}

const Todo: FC<Props> = ({ route }) => {
  const { title, content, createdAt } = route.params.todo;

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>{title}</Card.Title>
        <Card.Divider />
        <Text>{content}</Text>
        <Text style={styles.createdAt}>作成日時: {format(createdAt, 'yyyy.MM.dd HH:mm')}</Text>
      </Card>
      <View style={styles.buttonGroup}>
        <Button title='更新' />
        <Button title='削除' buttonStyle={{ backgroundColor: 'red', marginLeft: 10 }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  buttonGroup: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 10
  },
  createdAt: {
    color: '#999',
    marginTop: 20,
    textAlign: 'right'
  }
});

export default Todo;
