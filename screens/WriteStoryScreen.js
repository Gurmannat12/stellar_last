import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config';
import * as firebase from "firebase";
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class TransactionScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            title: "",
            author: "",
            story: "",
        }
    }

    submitStory=()=>{
        db.collection("storyHub").add({
            title: this.state.title,
            author: this.state.author,
            story: this.state.story,
        })
        
        this.setState({
            title: "",
            author: "",
            story: ""
        })
    }

    render() {
        return(
          <SafeAreaProvider>
            <View>
            <View style={styles.textContainer}>
          <Header
          centerComponent={{
              text:'Story Hub'
          }}/>
          </View>

            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputBox}
              placeholder="Title"
              onChangeText={text => {
                this.setState({ title: text });
              }}
              value={this.state.title}
              />  
            </View>

            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputBox}
              placeholder="Author"
              onChangeText={text => {
                this.setState({ author: text });
              }}
              value={this.state.author}
              />
        </View>

            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputBox2}
              placeholder="Write Your Story Here"
              onChangeText={text => {
                this.setState({ story: text });
              }}
              value={this.state.story}
              />
        </View>

        <TouchableOpacity
                style={styles.submitButton}
                onPress={this.submitStory}>
                    <Text>Submit</Text>
                </TouchableOpacity>
        </View>
        </SafeAreaProvider>
        )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textContainer: {
        backgroundColor: 'lightpink',
        width: '100%',
    },
    inputView:{
        flexDirection: 'row',
        margin: 20
      },
      inputBox:{
        width: 380,
        height: 40,
        borderWidth: 1.5,
        borderRightWidth: 1.5,
        borderLeftWidth: 1.5,
        fontSize: 20
      },
      inputBox2:{
        width: 380,
        height: 200,
        borderWidth: 1.5,
        borderRightWidth: 1.5,
        borderLeftWidth: 1.5,
        fontSize: 20
      },
      submitButton: {
        width: 80,
        height: 50,
        alignSelf: 'center',
        padding: 10,
        margin: 10,
        borderWidth:1.5,
        backgroundColor:'lightpink'
    },
  });
