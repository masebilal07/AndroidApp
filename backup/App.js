import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppReducer from './reducers';
import { AppNavigator, middleware } from './navigators';

const store = createStore(AppReducer, applyMiddleware(middleware));

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

{/*import  React, {Component} from 'react';
import {
  Container, Content, Text,
  Header, Body, Left,
  Right, List, ListItem,
  CheckBox, Fab, Icon
} from 'native-base';
import {FlatList} from 'react-native';

import Variaitem from './components/Variaitem';

export default class App extends Component{

  constructor(){
    super();
    this.state = {
      count: 0,
      todos: []
    };
  }

  componentWillMount(){
    /*console.log('componentWillMount');
    this.handleIncTodo()
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  _keyExtractor = (item, index) => item.id;

  handleIncTodo(){
    const count = this.state.count + 1;

    let todos = this.state.todos;
    todos.push({
      id: count,
      todo: "Not To Do #" + count
    });

    this.setState({
      todos,
      count
    });
  }

  render(){
    return(
      <Container>
        <Header>
          <Body>
            <Text>Not To Do List ({this.state.count})</Text>
          </Body>
        </Header>

        <Content>
          <List>
            <FlatList
              data={this.state.todos}
              keyExtractor={this._keyExtractor}
              renderItem={({item}) => <Variaitem todo={item}/>}
            />
            {/*this.todos.map((todo)=> <Variaitem todo={todo} key={todo.id}/> )}
          </List>
        </Content>

        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.handleIncTodo() }>
          <Icon name="add" />
        </Fab>

      </Container>
    );
  }
}
*/}
