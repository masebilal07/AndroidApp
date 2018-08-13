import React, {Component} from 'react';
import {
  View,Text,StyleSheet,
  Image
} from 'react-native';

export default class Body extends Component {
  render(){
    return(
      <Image
        source={this.props.imageSource}
        style={styles.image}
      />
    );
  }
}

const styles = StyleSheet.create({
  image:{
    height: 170,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
