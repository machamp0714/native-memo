import React from 'react';
import firebase from 'firebase/app';
import firebaseConfig from './src/firebase-config';
import FirebaseApp from './src/FirebaseApp';

import { NavigationContainer } from '@react-navigation/native';
import ToDoNavigator from './src/navigators/ToDoNavigator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ToDoReducer, { initState } from './src/reducers/todo';

const store = createStore(ToDoReducer, initState);

firebase.initializeApp(firebaseConfig);

const App = () => (
  <Provider store={store}>
    <FirebaseApp>
      <NavigationContainer>
        <ToDoNavigator />
      </NavigationContainer>
    </FirebaseApp>
  </Provider>
)

export default App;
