import React, {Component} from 'react';
import {
  View, Text,StyleSheet,
  TextInput, TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

export default class Myform extends Component {
  render() {
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          placeholder="Username"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
        />
        <TouchableOpacity style={styles.buttonlogin}>
          <Text style={styles.buttontext}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255, 0.8)',
    paddingLeft: 10,
    marginBottom: 15,
    textDecorationLine: 'none',
    // textDecorationStyle: 'none'
    // flex: 1
  },
  buttonlogin: {
    backgroundColor: 'green',
    paddingVertical: 15
  },
  buttontext:{
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  }
});
