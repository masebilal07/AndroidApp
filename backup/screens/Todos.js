import  React, {Component} from 'react';
import {
  Container, Content, Text,
  Header, Body, Left,
  Right, List, ListItem,
  CheckBox, Fab, Icon
} from 'native-base';
import {FlatList} from 'react-native';
import axios from 'axios';
import {API_URL} from '../config';

import Variaitem from '../components/Variaitem';
import TryRedux from '../components/TryRedux';

export default class Todos extends Component{

  constructor(){
    super();
    this.state = {
      count: 0,
      todos: []
    };
  }

  componentDidMount(){
    const self = this;
    axios.get(`${API_URL}/todos`).then((result)=>{
      self.setState({
        todos: result.data
      })
    });
  }

  _keyExtractor = (item, index) => item.id;

  render(){
    return(
      <Container>
        <Content>
          <List>
            <FlatList
              data={this.state.todos}
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
