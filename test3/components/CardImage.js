import React, {Component} from 'react';
import {
  View,Text, StyleSheet,Image,ScrollView
} from 'react-native';
import {
  Container, Header, Content, Card, CardItem,
  Thumbnail, Button, Icon, Left, Body, Right,
  TabHeading,Tabs, Tab
} from 'native-base';

export default class CardImage extends Component {
  render() {
    return(
      <View style={styles.headercontainer}>
        <View style={styles.profilecontainer}>
          <Image
            style={styles.mypic}
            source={require('./images/ungaran.jpg')}
          />
        </View>

        <View style={styles.profilecontainer}>
          <Image
            style={styles.mypic}
            source={require('./images/ungaran.jpg')}
          />
        </View>

        <View style={styles.profilecontainer}>
          <Image
            style={styles.mypic}
            source={require('./images/ungaran.jpg')}
          />
        </View>

      </View>

    );
  }
}
const styles = StyleSheet.create({
  headercontainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    // backgroundColor: 'rgba(0,0,0,0,6)',
  },
  profilecontainer: {
    width: 80,
    height: 80,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,07)',
    marginRight: 15

  },
  mypic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 90,
    borderColor: '#fff',
  },
  name: {
    marginTop: 10,
    fontSize: 8,
    color: '#000',
    fontWeight: 'bold'
  },
  liner: {
    color: '#000',
    fontSize: 8,
    fontStyle: 'italic',

  }
});


{/* <Content>
    <Card>
      <CardItem>
        <Left>
          <Thumbnail source={require('./ungaran.jpg')} />
          <Body>
            <Text>NativeBase</Text>
            <Text note>GeekyAnts</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image source={require('./ungaran.jpg')} style={{height: 200, width: null, flex: 1}}/>
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent>
            <Icon active name="thumbs-up" />
            <Text>12 Likes</Text>
          </Button>
        </Left>
        <Body>
          <Button transparent>
            <Icon active name="chatbubbles" />
            <Text>4 Comments</Text>
          </Button>
        </Body>
        <Right>
          <Text>11h ago</Text>
        </Right>
      </CardItem>
    </Card> */}


    // <Container>
    //   <Header />
    //   <Tabs>
    //     <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
    //
    //     </Tab>
    //     <Tab heading={ <TabHeading><Text>No Icon</Text></TabHeading>}>
    //
    //     </Tab>
    //     <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
    //
    //     </Tab>
    //   </Tabs>
    // </Container>
