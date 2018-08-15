import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Gren from './components/Gren';
import Blue from './components/Blue';
import Red from './components/Red';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Blue />
        <Red />
        <Gren />
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
