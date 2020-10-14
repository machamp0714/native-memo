import React from 'react';
import { Text } from 'react-native';
import { Header } from 'react-native-elements';
import TodoList from './src/components/TodoList';

export default function App() {
  return (
    <>
      <Header
        leftComponent={{ icon: 'home', color: '#fff' }}
        centerComponent={{ text: 'メモアプリ', style: { color: '#fff' } }}
        rightComponent={{ icon: 'add', type: 'material', color: '#fff' }}
      />
      <TodoList />
    </>
  )
}
