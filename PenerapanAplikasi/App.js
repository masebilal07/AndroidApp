import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Advance from './components/Advance';

export default class App extends React.Component {
  render() {
    return (
      <Advance />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
