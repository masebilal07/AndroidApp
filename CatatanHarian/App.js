import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

import AppReducer from './reducers';
import { AppNavigator, middleware } from './navigators';

const middlewares = applyMiddleware(
  logger,
  promiseMiddleware()
);

const store = createStore(AppReducer, middlewares);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;


// import {createStackNavigator} from 'react-navigation';
// import  React, {Component} from 'react';
// import {Icon} from 'native-base';
//
// import Todos from './screens/Todos';
// import TodosCreate from './screens/TodosCreate';
//
// const App = createStackNavigator({
//   Todos: {
//     screen: Todos,
//     navigationOptions: {
//       headerTitle: 'Catatan Harian',
//       headerRight: <Icon name="menu" style={{paddingRight: 20, color: "#5067FF"}}/>
//     },
//   },
//   TodosCreate: {
//     screen: TodosCreate,
//     navigationOptions: {
//       headerTitle: 'Buat Catatan Harian',
//       headerRight: <Icon name="menu" style={{paddingRight: 20, color: "#5067FF"}}/>
//     },
//   }
// });
//
// export default App;
