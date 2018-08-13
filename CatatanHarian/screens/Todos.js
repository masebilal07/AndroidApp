import  React, {Component} from 'react';
import {
  Container, Content, Text,
  Header, Body, Left,
  Right, List, ListItem,
  CheckBox, Fab, Icon
} from 'native-base';
import {FlatList} from 'react-native';
import {allTodos} from '../actions';
import {connect} from 'react-redux';
// import axios from 'axios';
// import {API_URL} from '../config';

import Variaitem from '../components/Variaitem';
// import TryRedux from '../components/TryRedux';

class Todos extends Component{

  componentDidMount(){
    this.props.dispatch(allTodos())
    console.log(allTodos())
  }

  _keyExtractor = (item, index) => item.id;

  render(){
    return(
      <Container>
        <Content>
          <List>
            <FlatList
              data={this.props.todosReducer.todos}
              keyExtractor={this._keyExtractor}
              renderItem={({item}) => <Variaitem todo={item}/>}
            />
            {/*this.todos.map((todo)=> <Variaitem todo={todo} key={todo.id}/> )*/}
          </List>
        </Content>

        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('TodosCreate') }>
          <Icon name="add" />
        </Fab>

      </Container>
    );
  }
}

const mapStateToProps = (state)=>({
  todosReducer: state.todosReducer
});

export default connect(mapStateToProps)(Todos);
