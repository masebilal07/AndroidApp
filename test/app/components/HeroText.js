import React, {Component} from 'react';
import {
  View,Text,StyleSheet,
  Image
} from 'react-native';

export default class HeroText extends Component {
  render(){
    return(
      <View>
        <Text style={styles.headerText}>Laptop</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText:{
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    borderRadius: 10,


    elevation: 1,
    alignSelf: 'center',
    fontSize: 25,
    color: '#292929',
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255, 0.7)',
    padding: 10,
    fontWeight: 'bold',
  },
});
