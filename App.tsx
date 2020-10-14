import React from 'react';
import { Header } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import TodoList from './src/components/TodoList';

export default function App() {
  return (
    <NavigationContainer>
      <Header
        leftComponent={{ icon: 'home', color: '#fff' }}
        centerComponent={{ text: 'メモアプリ', style: { color: '#fff' } }}
        rightComponent={{ icon: 'add', type: 'material', color: '#fff' }}
      />
      <TodoList />
    </NavigationContainer>
  )
}
