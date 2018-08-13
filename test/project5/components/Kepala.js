import React, {Component} from 'react';
import {
  View,Text,StyleSheet,
  Image, ImageBackground,
  Dimensions
} from 'react-native';

export default class Kepala extends Component {
  render(){
    return(
      // <View>
      //   <Text>Coba Layar</Text>
      // </View>
      <ImageBackground
        style={styles.kepala}
        source={require('../img/img5.jpeg')}
        >
          <View style={styles.headercontainer}>
            <View style={styles.profilecontainer}>
              <Image
                style={styles.mypic}
                source={require('../img/mase.jpg')}
              />
            </View>
            <Text style={styles.name}> Mase Bilal</Text>
            <Text style={styles.liner}>Developer & Programmer</Text>
          </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  kepala:{
    flex: 1,
    width: Dimensions.get('window').width ,
    height: Dimensions.get('window').height ,
    alignItems: 'stretch'
  },
  headercontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    // backgroundColor: 'rgba(0,0,0,0,6)',
  },
  profilecontainer: {
    width: 180,
    height: 180,
    borderRadius: 100,
    borderWidth: 15,
    borderColor: 'rgba(0,0,0,07)'
  },
  mypic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 90,
    borderColor: '#fff'
  },
  name: {
    marginTop: 20,
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold'
  },
  liner: {
    color: '#000',
    fontSize: 15,
    fontStyle: 'italic',

  }

});
