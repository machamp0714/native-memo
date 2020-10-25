import React, { FC, useState } from 'react';
import { Button, Input } from 'react-native-elements';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { ToDoStackParamList } from '../navigators/ToDoNavigator';
import { ToDoParams } from '../actions/todo';

interface ToDoScreenProps {
  route: RouteProp<ToDoStackParamList, 'ToDo'>;
  updateToDo: (id: number, params: ToDoParams) => void;
  deleteToDo: (id: number) => void;
}

const TodoScreen: FC<ToDoScreenProps> = ({ route, updateToDo, deleteToDo }) => {
  const { id, title, content } = route.params.todo;

  const [todoTitle, setToDoTitle] = useState(title);
  const [todoContent, setToDoContent] = useState(content);

  const handleSubmit = () => {
    const params = {
      title: todoTitle,
      content: todoContent
    }
    updateToDo(id, params)
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Input placeholder='タイトルを入力してください' value={todoTitle} onChangeText={(text) => setToDoTitle(text)} />
        <Input placeholder='メモを入力してください' value={todoContent} onChangeText={(text) => setToDoContent(text)} />
      </KeyboardAvoidingView>
      <View style={styles.buttonGroup}>
        <Button title='更新' onPress={handleSubmit} />
        <Button title='削除' onPress={() => deleteToDo(id)} buttonStyle={{ backgroundColor: 'red', marginLeft: 10 }} />
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

export default TodoScreen;
