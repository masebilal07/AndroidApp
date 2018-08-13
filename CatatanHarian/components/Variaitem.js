import React, {Component} from 'react';
import {
  Body, Left,Right,
  ListItem, CheckBox, Text,
  SwipeRow, Icon, Button
} from 'native-base';
import {View} from 'react-native';
import propTypes from 'prop-types';
import axios from 'axios';
import {connect} from 'react-redux';

import {API_URL} from '../config';
import {allTodos} from '../actions';

class Variaitem extends Component{

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

  async handleDelete(id){
    await axios.delete(`${API_URL}/todos/${id}`);
    this.props.dispatch(allTodos());
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

const mapStateToProps = (state)=>({

});

export default connect(mapStateToProps)(Variaitem);
