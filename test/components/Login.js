import React, {Component} from 'react';
import {
  View,Text,StyleSheet,
  Image,Dimensions
} from 'react-native';
import Myform from './Myform';

export default class Login extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.logocontainer}>
          <Image
            style={styles.logo}
            source={require('./images/logo.png')}
          />
          {/* <Text style={styles.title}>Login Aplikasi Sederhana</Text> */}
        </View>
        <View style={styles.myform}>
          <Myform />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#d2d7d3',
    width: Dimensions.get('window').width,
  },
  logocontainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 60,
    // marginTop: 50,
  },
  myform: {
    flex: 1,
  },
  title:{
    color: '#000'
  },
});
