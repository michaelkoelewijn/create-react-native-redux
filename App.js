import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

import {Scene, Router, Actions} from 'react-native-router-flux';
import { StyleSheet, Text, View, Button } from 'react-native';

import Home from './containers/Home';
import Todos from './containers/Todos';
import Todo from './containers/Todo';

const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="home" component={Home} title="Home"/>
            <Scene key="todos" component={Todos} title="Todos"/>
            <Scene key="todo" component={Todo} title="Todo"/>
          </Scene>
        </Router>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
