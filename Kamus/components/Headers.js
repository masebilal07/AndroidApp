import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class Headers extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Indonesia</Title>
          </Body>
          <Body>
            <Icon name="md-swap" style={styles.swap}/>
          </Body>
          <Right>
            <Button transparent>
            <Title>Braille</Title>
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#006666',
    flexDirection: 'row'
  },
  swap: {
    color: '#fff',
    paddingLeft: 27,
  },
});
