import React, { FC, useState, useContext } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import firebase from 'firebase/app';

import { FirebaseContext } from '../contexts';
import { ToDoParams } from '../actions/todo';
import { collectionName } from '../services/constants';

const AddToDo: FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { db } = useContext(FirebaseContext);
  if (!db) throw new Error('unauthorized');

  const addToDo = (params: ToDoParams) => {
    db.collection(collectionName.todos).add({
      ...params,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  const handleSubmit = () => {
    const params: ToDoParams = {
      title: title,
      content: content
    }
    addToDo(params);
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
