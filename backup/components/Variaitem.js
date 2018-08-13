import React, {Component} from 'react';
import {
  Body, Left,Right,
  ListItem, CheckBox, Text,
  SwipeRow, Icon, Button
} from 'native-base';
import {View} from 'react-native';
import propTypes from 'prop-types';
import axios from 'axios';

import {API_URL} from '../config';

export default class Variaitem extends Component{

  state = {
    isDone: false
  }

  componentDidMount(){
    const {todo : {isDone}} = this.props;

    this.setState({isDone: Boolean(isDone)});
  }

  handleDone(){
    const {todo: {id, name}} =  this.props;

    this.setState({
      isDone: !this.state.isDone
    });

    axios.patch(`${API_URL}/todos/${id}`, {
      isDone: this.state.isDone? 0: 1
    });
  }

  handleDelete(id){
    axios.delete(`${API_URL}/todos/${id}`);
  }

  render(){
    const {todo: {id, name}} =  this.props;

    return(
      <SwipeRow
        key={id}
        rightOpenValue={-75}
        body={
          <View  style={{flexDirection: 'row'}}>
            <View style={{padding: 10}}>
              <CheckBox checked={this.state.isDone} onPress={()=> this.handleDone(this.state.isDone)}/>
            </View>
            <View style={{padding: 10}}>
              <Text>{name}</Text>
            </View>
          </View>
        }
        right={
          <Button danger onPress={() => this.handleDelete(id)}>
            <Icon active name="trash" />
          </Button>
        }
      />
    )
  }
}

Variaitem.propTypes = {
  todo: propTypes.object.isRequired
}
