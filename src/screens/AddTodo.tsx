import React, { FC, useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from 'react-native-elements';

const AddTodo: FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <Input placeholder='タイトルを入力してください' value={title} onChangeText={(text) => setTitle(text)} />
      <Input placeholder='メモを入力してください' value={content} onChangeText={(text) => setContent(text)} />
      <Button title='追加' style={{ width: 100 }} />
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

export default AddTodo;
