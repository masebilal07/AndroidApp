import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import Todos from '../screens/Todos';
import TodosCreate from '../screens/TodosCreate';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const RootNavigator = createStackNavigator({
  Todos: { screen: Todos },
  TodosCreate: { screen: TodosCreate},
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };
