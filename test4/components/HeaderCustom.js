import React, {Component} from 'react';
import {
  View,Text,StyleSheet
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class HeaderCustom extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='heart' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{

  },
});
