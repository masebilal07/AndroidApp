import React, {Component} from 'react';
import {
  View,Text,StyleSheet
} from 'react-native';
import { Container, Header,Right,Left,Button,Body,Title, Tab, Tabs, TabHeading, Icon, } from 'native-base';

export default class Advance extends Component {
  render(){
    return(
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>WhatsApp</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="camera" /></TabHeading>}>

          </Tab>
          <Tab heading={ <TabHeading><Text>Chat</Text></TabHeading>}>

          </Tab>
          <Tab heading={ <TabHeading><Text>Status</Text></TabHeading>}>

          </Tab>
          <Tab heading={ <TabHeading><Icon name="apps" />Telefon</TabHeading>}>

          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
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
