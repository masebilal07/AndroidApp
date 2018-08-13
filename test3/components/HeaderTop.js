import React, { Component } from 'react';
import {StyleSheet,Image} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class HeaderTop extends Component {
  render() {
    return (
        <Header style={styles.headersetting}>
          <Left>
            <Button transparent>
              <Icon style={styles.icons} name='camera' />
            </Button>
          </Left>
          <Body>
            <Image
              style={styles.logo}
              source={require('./images/instagram.png')}
            />
          </Body>
          <Right>
            <Button style={styles.destop} transparent>
              <Icon style={styles.icons} name='desktop' />
            </Button>
            <Button transparent>
              <Icon style={styles.iconss} name='ios-send' />
            </Button>
          </Right>
        </Header>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
   width: 120,
   height: 35,
 },
 headersetting: {
   backgroundColor: '#fff',
   borderBottomColor: '#000'
 },
 icons: {
   color: '#000',
 },
 iconss: {
   color: '#000',
   fontSize: 40,
 },
});
