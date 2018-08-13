import React, {Component} from 'react';
import {
  View,Text,StyleSheet,
  ScrollView
} from 'react-native';
import CompoImage from './CompoImage';
import HeroText from './HeroText';

export default class Body extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.column1}>
          <CompoImage imageSource={require('../images/img3.jpeg')} />
        </View>
        <View style={styles.column2}>
          <CompoImage imageSource={require('../images/img4.jpg')} />
        </View>
        <View style={styles.full}>
          <CompoImage imageSource={require('../images/img5.jpeg')} />
        </View>
        <View style={styles.column2}>
          <CompoImage imageSource={require('../images/img1.jpeg')} />
        </View>
        <View style={styles.column1}>
          <CompoImage imageSource={require('../images/img6.jpeg')} />
        </View>
        <View style={styles.full}>
          <CompoImage imageSource={require('../images/img3.jpeg')} />
        </View>
        <View style={styles.column1}>
          <CompoImage imageSource={require('../images/img1.jpeg')} />
        </View>
        <View style={styles.column2}>
          <CompoImage imageSource={require('../images/img2.jpeg')} />
        </View>
        <View style={styles.full}>
          <CompoImage imageSource={require('../images/img5.jpeg')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    backgroundColor: '#c1c1c1',
  },
  column1: {
    flex: 1,
    padding: 5,
  },
  column2: {
    flex: 2,
    padding: 5
  },
  full: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
});
