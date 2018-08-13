import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {Drawer} from 'native-base';
import CardImage from './components/CardImage';
import FooterBadge from './components/FooterBadge';
import Sidebar from './components/Sidebar';
import HeaderTop from './components/HeaderTop';

export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <HeaderTop />
        <CardImage />
        <FooterBadge />
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
  },
});

{/* <FooterBadge /> */}

// closeDrawer() {
//   this.drawer._root.close()
// }
// openDrawer() {
//   this.drawer._root.open()
// }
//
// <Drawer
//  ref={(ref) => { this.drawer = ref; }}
//  content={<Sidebar navigator={this.navigator} />}
//  onClose={() => this.closeDrawer()} >
//  <Container>
//   <Header>
//     <Left>
//       <Button transparent>
//         <Icon name='arrow-back' />
//       </Button>
//     </Left>
//     <Body>
//       <Title>Header</Title>
//     </Body>
//     <Right>
//       <Button transparent>
//         <Icon name='menu' />
//       </Button>
//     </Right>
//   </Header>
// </Container>
// </Drawer>
