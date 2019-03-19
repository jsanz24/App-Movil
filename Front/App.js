import React from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';
import { Button } from 'react-native-elements';
import authService from "./authService";

export default class App extends React.Component {
  constructor(){
    this.service = new authService()
  }
  login(){
    this.service.login(username,password)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>User: </Text>
        <TextInput></TextInput>
        <Text>Pass: </Text>
        <TextInput></TextInput>
        <Button title="login" onPress={this.login()}/>
      </View>
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
