import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ToDoNavigator from './src/navigators/ToDoNavigator';

const App = () => (
  <NavigationContainer>
    <ToDoNavigator />
  </NavigationContainer>
)

export default App;