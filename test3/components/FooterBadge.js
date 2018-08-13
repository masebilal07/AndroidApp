import React, {Component} from 'react';
import {
  View,Text, StyleSheet,Image
} from 'react-native';
import { Container, Header, Content, Footer,
  FooterTab, Button, Icon, Badge } from 'native-base';


export default class CardImage extends Component {
  render() {
    return(

        <Footer>
          <FooterTab  style={styles.footercolor}>
            <Button vertical>
              <Icon style={styles.footericons} name="home" />
              <Text></Text>
            </Button>
            <Button vertical>
              <Icon style={styles.footericon} name="search" />
              <Text></Text>
            </Button>
            <Button vertical>
              <Icon style={styles.footericonadd} name="add" />
              <Text></Text>
            </Button>
            <Button vertical>
              <Icon style={styles.footericon} active name="star" />
              <Text></Text>
            </Button>
            <Button vertical>
              <Icon style={styles.footericon} name="person" />
              <Text></Text>
            </Button>
          </FooterTab>
        </Footer>

    );
  }
}

const styles = StyleSheet.create({
  footercolor: {
    backgroundColor: '#fff'
  },
  footericon: {
    color: '#777'
  },
  footericons: {
    color: '#000'
  },
  footericonadd: {
    color: '#fff',
    backgroundColor: '#000',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 3
  }
});
