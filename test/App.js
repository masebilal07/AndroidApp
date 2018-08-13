import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Superman from './components/Superman';
import {
  Container, Header, Title, Content,
  Footer, FooterTab, Button, Left,
  Right, Body, Icon, } from 'native-base';
// import Red from './components/Red';
// import Login from './components/Login';

// import Horisontal from './components/Horisontal';

// import Header from './app/components/Header';
// import HeroImage from './app/components/HeroImage';
// import Body from './app/components/Body';
// import Kepala from './project5/components/Kepala';
// import Mid from './project5/components/Mid';
// import Body from './project5/components/Body';
//youtube
import Navbar from './youtube/components/Navbar';
import Tabbar from './youtube/components/Tabbar';
import data from './youtube/components/search.json';
import Body from './youtube/components/Body';

export default class App extends React.Component {

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });


  render() {
    return (
      <View style={styles.container}>
        <Navbar />
        <ScrollView>
          <Body video={data.items[0]} />
          <Body video={data.items[1]} />
          <Body video={data.items[2]} />
          <Body video={data.items[3]} />
          <Body video={data.items[4]} />
        </ScrollView>
        <Tabbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 100,
  },
});

//Header
// {/* <Header>
//  <Left>
//    <Button transparent>
//      <Icon name='menu' />
//    </Button>
//  </Left>
//  <Body>
//    <Title>Header</Title>
//  </Body>
//  <Right>
//    <Button transparent>
//      <Icon name='camera' />
//    </Button>
//  </Right>
// </Header> */}

// youtube
// {/* <View style={styles.container}>
//   <Navbar />
//   <ScrollView>
//     <Body video={data.items[0]} />
//     <Body video={data.items[1]} />
//     <Body video={data.items[2]} />
//     <Body video={data.items[3]} />
//     <Body video={data.items[4]} />
//   </ScrollView>
//   <Tabbar />
// </View> */}


// acoun/
{/* <Kepala />
<Mid />
<Body /> */}


// {/* <ScrollView style={styles.container}>
//   <Horisontal />
//    <Login />
//    <Header />
//   <HeroImage />
//    <Body />
// </ScrollView> */}
