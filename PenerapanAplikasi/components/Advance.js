import React, {Component} from 'react';
import {
  View,Text,StyleSheet
} from 'react-native';
import {
  Container, Header,Right,
  Left,Button,Body,Title, Tab,
  Tabs, TabHeading, Icon,Fab } from 'native-base';
import ChatList from './ChatList';
// import Camera from './Camera';

export default class Advance extends Component {
  render(){
    return(
      <Container>
        <Header style={styles.container}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>WhatsApp</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
        <Tabs  style={styles.container}>
          <Tab heading={ <TabHeading style={styles.containericon}><Icon style={styles.icon} name="camera" /></TabHeading>}>
            <Text>Coba Kamera</Text>
          </Tab>
          <Tab heading={ <TabHeading style={styles.container}><Text style={styles.navbartext}>CHATTING</Text></TabHeading>}>
            <ChatList />
          </Tab>
          <Tab heading={ <TabHeading style={styles.container}><Text style={styles.navbartext}>STATUS</Text></TabHeading>}>
            <Text>Tes Status</Text>
          </Tab>
          <Tab heading={ <TabHeading style={styles.container}><Text style={styles.navbartext}>PANGGILAN</Text></TabHeading>}>
            <Text>Tes Panggilan</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#075e54',
  },
  containericon:{
    backgroundColor: '#075e54',
    width: 30,
  },
  navbartext: {
    color: '#fff',
    fontSize: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  icon: {
    color: '#fff'
  }
});

// import React, { Component } from 'react';
// import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
// // import Tab1 from './components/Tab1';
// // import Tab2 from './components/Tab2';
// // import Tab3 from './components/Tab3';
//
// ​export default class Advance extends Component {
//   render() {
//     return (
      // <Container>
      //   <Header hasTabs/>
      //   <Tabs>
      //     <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
      //       <Tab1 />
      //     </Tab>
      //     <Tab heading={ <TabHeading><Text>No Icon</Text></TabHeading>}>
      //       <Tab2 />
      //     </Tab>
      //     <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
      //       <Tab3 />
      //     </Tab>
      //   </Tabs>
      // </Container>
//     );
//   }
// }
