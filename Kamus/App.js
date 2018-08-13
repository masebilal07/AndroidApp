import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Headers from './components/Headers';
import InputBody from './components/InputBody';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Headers />
        <InputBody />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
