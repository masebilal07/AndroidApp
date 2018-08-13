import React, {Component} from 'react';
import {
  Container, Content, Text,
  Form, Item, Label, Input,
  Button} from 'native-base';
import axios from 'axios';
import {StyleSheet} from 'react-native';
import {API_URL} from '../config';

export default class TodosCreate extends Component{

  constructor(){
    super();
    this.state = {
      isReady: false,
      text:""
    };
  }

  async componentDidMount(){
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }

  handleSubmit(){
    const text = this.state.text;
    const {goBack} = this.props.navigation;

    if (text) {
      axios.post(`${API_URL}/todos`, {
        name: text
      }).then((result)=>{
        goBack();
      })
    }else {
      alert('Silahkan Masukan Data!!!')
    }
  }

  render(){
    if (!this.state.isReady) {
      return <Expo.AppLoading/>;
    }
    return(
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Apa yang kamu pikirkan ?</Label>
              <Input onChangeText={(text) => this.setState({text})}/>
            </Item>
          </Form>
        </Content>
        <Button full primary onPress={()=> this.handleSubmit()} style={styles.btnFooter}>
          <Text>Buat</Text>
        </Button>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  btnFooter:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right:0
  }
})
