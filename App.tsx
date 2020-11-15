import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ToDoNavigator from './src/navigators/ToDoNavigator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ToDoReducer, { initState } from './src/reducers/todo';

const store = createStore(ToDoReducer, initState);

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <ToDoNavigator />
    </NavigationContainer>
  </Provider>
)

export default App;
