/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
} from 'react-native';
import Database from './src/firebaseDatabase';

import {
    StackNavigator
} from 'react-navigation';

import * as firebase from "firebase";

const onButtonPress= ()=>{Alert.alert('Button has been pressed!')}
const onButtonPress1= ()=>{Alert.alert('Register function is not ready yet!')}

export default class HomeScreen extends Component {

  static navigationOptions= {
      title: 'Welcome',
      header: null
  };


  constructor(props) {
      super(props);
      this.state = { 
        account: 'account@gmail.com',
        password: 'password'
      };
      firebase.initializeApp({
      apiKey: "AIzaSyAHrUnwILI37oGBwQqYf4CE7unj3XOKufY",
      authDomain: "rn-demo.firebaseapp.com",
      databaseURL: "https://rn-demo.firebaseio.com",
      storageBucket: "rn-demo.appspot.com"
    })
  
  };
  onLoginPress(){
    this.login(this.state.account, this.state.password);
  };
  
  async login(email, pass) {
    
    try {
        await firebase.auth()
            .signInWithEmailAndPassword(email, pass);

        console.log("Logged In!");

        // Navigate to the Home page

    } catch (error) {
        console.log(error.toString())
    }

}

  onWriteData(){

       //  Database.setUserMobile(this.state.uid, this.state.mobileForm);
           Database.setUserMobile('key1', 'key2');
  };
  onSignupPress(){
    this.signup(this.state.account, this.state.password);
    };
  
  async signup(email, pass) {

    try {
        await firebase.auth()
            .createUserWithEmailAndPassword(email, pass);

        console.log("Account created");

        // Navigate to the Home page, the user is auto logged in

    }
     catch (error) {
        console.log(error.toString())
    }
  };
 
  render() {

    const {navigate} = this.props.navigation;
   

    return (
    <View style={{flex:1, flexDirection: 'column'}}>
      <View style={{flex: 2, flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'skyblue',}}>
       
        <Text style={{fontSize: 50,color: 'black'}}>
         Sign in System
        </Text>
      
        <Text style={{fontSize: 40,color: 'black'}}>
         Welcome
        </Text>
        </View>
      
      <View style={{flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'skyblue',}}>
        <View style = {{flex:1, flexDirection: 'row',
        justifyContent: 'center', alignItems: 'center'}}>
        
        <Text style = {{fontSize: 25,color: 'black'}}>
         Account: 
        </Text> 
        <TextInput
          style = {{ height: 40, width:238, borderColor: 'gray', borderWidth: 0}}
         
          underlineColorAndroid = 'black'
          onChangeText = {(text) => this.setState({account:text})}
          value = {this.state.account}
        />
        </View>
        <View style= {{flex:1, flexDirection: 'row',
        justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{ fontSize: 25,color: 'black'}}>
         Password: 
        </Text>
         <TextInput
          style = {{ height: 40, width:238, borderColor: 'gray', borderWidth: 0}}
        
          keyboardType = 'numeric'
          underlineColorAndroid = 'black'
          onChangeText = {(text) => this.setState({password:text})}
          value = {this.state.password}
        />
        </View>
       
      </View>
        <View style={{flex: 1, flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'skyblue',}}>
        <Button 
        onPress = {()=> navigate('Chat')}
        OnPress ={ ()=> this.onLoginPress()}
        title= 'Sign In!'/>
        
        <Button 
        onPress = {()=> this.onSignupPress()}
        title= 'Sign Up!'/>

        <Button 
        onPress = {()=> this.onWriteData()}
        title= 'Datain!'/>
        
       </View>
    </View>
     
      
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class ChatScreen extends Component {
         static navigationOptions = {
            title: 'Chat with Me',
            
         };
     render() {
        return (
         <View style={{flex: 1, flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'skyblue',}}>
          <View style= {{flex:1, flexDirection: 'column', 
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: 'skyblue',
          }}>
           <Text style= {{fontSize: 50}}> Chat with Me</Text>
          </View>
          <View style= {{
            flex:1, 
            flexDirection: 'row', 
            justifyContent:'space-around',
            alignItems: 'center'
            }}>
            <Text style= {{fontSize: 25, alignItems:'center',}}>
              My First HyperLink!!
              Second Line!
            </Text> 
          </View>
         </View>

     );
   }
 }

const SimpleApp= StackNavigator({
    Home:{screen:HomeScreen},
    Chat:{screen:ChatScreen},
});

AppRegistry.registerComponent('goodproject', () => SimpleApp);



