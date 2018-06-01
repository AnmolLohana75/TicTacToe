import React, { Component } from 'react';
import {Text, View, TouchableOpacity, TextInput, AppRegistry, Image, Button, ActivityIndicator} from 'react-native';
import { Constants } from 'expo';

//You can import from local files.
import AssetExample from './components/AssetExample';

//or any pure javascript modules available in npm
import { card } from 'react-native-elements';//version can specified in pakage.json

export default class App extends Component {
  render() {
return (
  <View 
  style={{backgroundColor: 'green',marginTop:50,alignItems:'center'}}>
  <Text 
  style={{color:'blue',backgroundColor:'yellow',textAlign:'center',marginTop:50}}>Task Form Application
  </Text>
  <Text
  style={{backgroundColor:'purple',height:25,width:150,marginTop:25}}>
  <Text 
  style={{color:'white'}}>Name:
  </Text>
  </Text>
  <TextInput
  placeholder='Enter Name'
  style={{width:150,height:50}}
  />
  <Text
  style={{backgroundColor:'purple',height:25,width:150,marginTop:25}}>
  <Text 
  style={{color:'white'}}>FatherName:
  </Text>
  </Text>
   <TextInput
  placeholder='Enter FatherName'
  style={{width:150,height:50}}
  />
  <Text
  style={{backgroundColor:'purple',height:25,width:150,marginTop:25}}>
  <Text 
  style={{color:'white'}}>Age:
  </Text>
  </Text>
   <TextInput
  placeholder='Enter Age'
  style={{width:150,height:50}}
  />
  <Text
  style={{backgroundColor:'purple',height:25,width:150,marginTop:25}}>
  <Text 
  style={{color:'white'}}>RollNo:
  </Text>
  </Text>
   <TextInput
  placeholder='Enter RollNo'
  style={{width:150,height:50}}
  />
  <Button
  title="Submit"
  color="#841584"
/>
  <ActivityIndicator size="large" color="violet"/>
  </View>
  );
  }
}
