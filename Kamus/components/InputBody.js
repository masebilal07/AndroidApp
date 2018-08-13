import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import { Container,Content, Card, CardItem, Text, Body, Button, Icon, Right } from 'native-base';

export default class InputBody extends Component {
  render() {
    return (
          <Card>
            <CardItem header>
              <Right>
                <Button  style={styles.right} transparent>
                  <Icon name='more' />
                </Button>
                <Button  style={styles.right} transparent>
                  <Icon name='more' />
                </Button>
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
         </Card>
    );
  }
}

const styles = StyleSheet.create({
  right: {
    flexDirection: 'row',
    marginLeft: 10,
  }
});
