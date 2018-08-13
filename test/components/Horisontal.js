import React, {Component} from 'react';
import {
  View,Text,StyleSheet,
  ScrollView,Dimensions
} from 'react-native';

export default class Horisontal extends Component {
  render(){
    return(
      <ScrollView horizontal={true} pagingEnabled={true} style={styles.container}>
        <View style={styles.blue}>
          <Text style={styles.innerText}>Layar Biru</Text>
        </View>
        <View style={[styles.blue, styles.green]}>
          <Text style={styles.innerText}>Layar Hijau</Text>
        </View>
        <View style={[styles.blue, styles.red]}>
          <Text style={styles.innerText}>Layar Merah</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{

  },
  blue: {
    backgroundColor: '#007bb6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  green: {
    backgroundColor: '#27ae60',
  },
  red: {
    backgroundColor: '#dd4b39'
  },
  innerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    // fontFamily: 'calibri'

  },
});
