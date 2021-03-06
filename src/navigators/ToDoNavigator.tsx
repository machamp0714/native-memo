import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ToDoListContainer from '../containers/ToDoList';
import AddToDo from '../screens/AddTodo';
import ToDoScreen from '../containers/ToDo';
import { ToDo } from '../services/models/todo';

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
      component={ToDoListContainer}
      options={{
        title: 'メモ一覧',
        headerShown: false
      }}
    />
    <Stack.Screen
      name='Add'
      component={AddToDo}
      options={{
        title: 'メモを追加する',
        headerStyle: { backgroundColor: 'rgb(32, 137, 220)' },
        headerTitleStyle: { color: '#fff' },
        headerBackTitleStyle: { color: '#fff' }
      }}
    />
    <Stack.Screen
      name='ToDo'
      component={ToDoScreen}
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
