import React, {Component} from 'react';
import {
  View,Text,StyleSheet
} from 'react-native';

export default class Mid extends Component {
  render(){
    return(
      <View style={styles.mid}>
        <View style={[styles.otherview, styles.leftbar]}>
          <Text style={styles.textone}>75+</Text>
          <Text style={styles.texttwo}>Images</Text>
        </View>
        <View style={styles.otherview}>
          <Text style={styles.textone}>100 +</Text>
          <Text style={styles.texttwo}>Subcribers</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mid:{
    flexDirection: 'row',
    backgroundColor: '#cf000f',
    borderTopWidth: 10,
    borderTopColor: '#fff'
  },
  otherview: {
    flex: 1,
    padding: 20,
    alignItems: 'center'
  },
  textone: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  texttwo: {
    color: '#fff',
    fontSize: 15,
  },
  leftbar: {
    borderRightWidth: 4,
    borderRightColor: '#fff',

  }
});
