import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {FlatList} from 'react-native';
import {Card} from 'react-native-elements';


const data = [
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something two"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something three"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something four"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something five"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something six"
  }
];


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: data
    }
  }

  render() {
    return (
      <FlatList
        horizontal
        data={this.state.data}
        keyExtractor={(item, index) => item.id}
        renderItem={({item: rowData}) =>
          {
            return(
              <Card
                style={{height: 200}}
                title={null}
                image={{uri: rowData.imageUrl }}
                containerStyle={{padding: 0, width: 160, height: 200, marginTop: 150}}
              >
                <Text style={{marginBottom: 10}}>{rowData.title}</Text>
              </Card>
            );
          }
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
