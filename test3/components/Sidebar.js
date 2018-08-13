import React, {Component} from 'react';
import {
  View,Text, StyleSheet,Image,
  ScrollView
} from 'react-native';
import {Button} from 'native-base';


export default class Sidebar extends Component {
  render() {
    return(
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Sidebar Menu</Text>
        <Image source={require('./ungaran.jpg')} style={styles.topImage} />
        <Button style={styles.button} block light><Text> Light </Text></Button>
         <Button style={styles.button} block primary><Text> Primary </Text></Button>
         <Button style={styles.button} block success><Text> Success </Text></Button>
         <Button style={styles.button} block info><Text> Info </Text></Button>
         <Button style={styles.button} block warning><Text> Warning </Text></Button>
         <Button style={styles.button} block danger><Text> Danger </Text></Button>
         <Button style={styles.button} block dark><Text> Dark </Text></Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginRight: 5,
  },
  text: {
    color: '#fff',
    marginTop: 50,
    marginLeft: 10,
  },
  topImage: {
    width: '100%',
    height: 100,
    margin: 10,
    opacity: 0.7,
  },
  button: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
});
