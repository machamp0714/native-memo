import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TodoList from '../screens/TodoList'
import AddTodo from '../screens/AddTodo';
import Todo from '../screens/Todo';
import { ToDo } from '../screens/TodoList';

export type ToDoStackParamList = {
  List: undefined
  ToDo: {
    todo: ToDo
  }
  Add: undefined
}

const Stack = createStackNavigator<ToDoStackParamList>();

const ToDoNavigator = () => (
  <Stack.Navigator initialRouteName='List'>
    <Stack.Screen
      name='List'
      component={TodoList}
      options={{
        title: 'メモ一覧',
        headerShown: false
      }}
    />
    <Stack.Screen
      name='Add'
      component={AddTodo}
      options={{
        title: 'メモを追加する',
        headerStyle: { backgroundColor: 'rgb(32, 137, 220)' },
        headerTitleStyle: { color: '#fff' },
        headerBackTitleStyle: { color: '#fff' }
      }}
    />
    <Stack.Screen
      name='ToDo'
      component={Todo}
      options={{
        title: '',
        headerStyle: { backgroundColor: 'rgb(32, 137, 220)' },
        headerTitleStyle: { color: '#fff' },
        headerBackTitleStyle: { color: '#fff' }
      }}
    />
  </Stack.Navigator>
);

export default ToDoNavigator;
