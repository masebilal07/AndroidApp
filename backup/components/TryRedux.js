import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from "redux-logger";
import axios from 'axios';
import promiseMiddleware from 'redux-promise-middleware';

import {API_URL} from '../config';

const usersInitialState = {
  username: ""
};
const usersReducer = function(state = usersInitialState, action){
  switch (action.type) {
    case 'USERS_CHANGE_USERNAME':
      state = {...state, username: action.payload};
      break;
    default:
      state;
  }
  return state;
}

const todosInitialState = {
  todos: [],
  isLoading:false
}
const todosReducer = function(state = todosInitialState, action){
  switch (action.type) {
    case 'ALL_TODOS_PENDING':
      state = {...state, isLoading: true};
      break;
      case 'ALL_TODOS_FULFILLED':
        state = {...state, isLoading:false, todos: action.payload.data};
        break;
    default:
      state
  }
  return state;
}

const rootReducers = combineReducers({
  usersReducer,
  todosReducer
});

const midllewares = applyMiddleware(
  logger,
  promiseMiddleware()
);

const store = createStore(rootReducers, midllewares);

store.subscribe(()=>{
  console.log(store.getState());
});
store.dispatch({
  type: "ALL_TODOS",
  payload: axios.get(`${API_URL}/todos`)
})
