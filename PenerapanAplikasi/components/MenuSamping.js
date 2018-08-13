import React, {Component} from 'react';
import {
  View,Text,StyleSheet
} from 'react-native';
import {Content} from 'native-base';

export default class MenuSamping extends Component {
  render(){
    return(
      <Content style={styles.container}>

      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'green',
  },
});
