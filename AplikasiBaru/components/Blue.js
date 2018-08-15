import React, {Component} from 'react';
import {
  View,Text,StyleSheet, Dimentions
} from 'react-native';

export default class Blue extends Component {
  render(){
    return(
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    width: Dimentions.get('window')width,
    height:  Dimentions.get('window')height,
    backgroundColor: 'blue',
  },
});
