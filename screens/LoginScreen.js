import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert, KeyboardAvoidingView, TextInput } from 'react-native';
import * as firebase from "firebase";

export default class LoginScreen extends React.Component {
    constructor(){
        super()
        this.state={
            emailId:'',
            password:'',

        }
    }

    login= async (email,password)=>{
        if(email && password){
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(email,password)
                if(response){
                    this.props.navigation.navigate('WriteStory')

                }
            }
            catch(error){
               switch (error.code){
                   case 'auth/user-not-found':
                       Alert.alert("user does not exists")
                       console.log("does not exists");
                       break;
                       case 'auth/invalid-email':
                       Alert.alert('invalid email or password');
                       console.log("invalid");
               }
            }
        }
        else{
            Alert.alert('enter email and password')
        }
    }
    render(){
        return(
            <KeyboardAvoidingView style = {{alignItems:'center',marginTop:20}}>
        <View>
          <Image
            source={require("../assets/storyhub.png")}
            style={{width:800, height: 200}}/>
          <Text style={{textAlign: 'center', fontSize: 30}}>Story Hub</Text>
        </View>
        <View>
        <TextInput
          style={styles.loginBox}
          placeholder="abc@example.com"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />

        <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="enter Password"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
        </View>
        <View>
          <TouchableOpacity style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7}}
          onPress={()=>{this.login(this.state.emailId ,this.state.password)}}>
            <Text style={{textAlign:'center'}}>Login</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>

      )
  }
}


const styles = StyleSheet.create({
    loginBox: {
      margin: 10,
      height:40,
        width:300,
        borderWidth:1.5,
        paddingLeft:10,
    },
})