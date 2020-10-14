import React from 'react';
import { Text } from 'react-native';
import { Header } from 'react-native-elements';
import TodoList from './src/components/TodoList';

export default function App() {
  return (
    <>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Add', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <TodoList />
    </>
  )
}
