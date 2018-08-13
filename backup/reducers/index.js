import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { RootNavigator } from '../navigators';

// Start with two routes: The Main screen, with the Login screen on top.
const action = RootNavigator.router.getActionForPathAndParams('Todos');
const tempNavState = RootNavigator.router.getStateForAction(action);

function nav(state = initialNavState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const AppReducer = combineReducers({
  nav
});

export default AppReducer;
