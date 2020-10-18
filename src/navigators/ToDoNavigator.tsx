import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TodoList from '../screens/TodoList'
import AddTodo from '../screens/AddTodo';
import { Icon } from 'react-native-elements';

const Stack = createStackNavigator();

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
    />
  </Stack.Navigator>
);

export default ToDoNavigator;
