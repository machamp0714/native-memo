import React, { FC, useState } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { ToDoParams } from '../actions/todo';
import { ToDo } from './TodoList';

interface AddToDoProps {
  todos: ToDo[];
  addToDo: (latestToDo: ToDo, params: ToDoParams) => void
}

const AddToDo: FC<AddToDoProps> = ({ todos, addToDo }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    const latestToDo = todos[todos.length - 1]
    const params: ToDoParams = {
      title: title,
      content: content
    }
    addToDo(latestToDo, params);
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <Input placeholder='タイトルを入力してください' value={title} onChangeText={(text) => setTitle(text)} />
      <Input placeholder='メモを入力してください' value={content} onChangeText={(text) => setContent(text)} />
      <Button title='追加' style={{ width: 100 }} onPress={handleSubmit} />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20
  }
})

export default AddToDo;
