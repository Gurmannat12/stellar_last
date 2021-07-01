import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';
import db from '../config';
import * as firebase from "firebase";

export default class ReadStoryScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        search:'',
        allStories:[],
        lastVisibleStory:null,
    }
}

fetchMoreStories = async ()=>{
  const query = await db.collection("storyHub").get()
  query.docs.map((doc)=>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()],
      lastVisibleStory:doc
    })
  })
}

componentDidMount = async ()=>{
  const query = await db.collection("storyHub").get()
  query.docs.map((doc)=>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()]
    })
  })
}

updateSearch = (search) => {
  this.setState({ search });
};

    render() {
      const { search } = this.state;

      return (
        <View>
        <View>
          <SearchBar 
          placeholder="Type Here...."
          onChangeText={this.updateSearch}
          value={search}
          />
        </View>
        
        <ScrollView>
        <FlatList 
          
        data =  {this.state.allStories}
          renderItem={({item})=>(
            
              <View style={{borderBottomWidth: 2}}>
                <Text>{"Author:" + item.author} </Text>
                <Text>{"Story:" + item.story} </Text>
                <Text>{"Title:" + item.title}</Text>
              </View>
          )}
          keyExtractor={(item,index) => index.toString()}
          onEndReached={this.fetchMoreStories}
          onEndReachedThreshold={0.7}
          />
          </ScrollView>
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20
    },
    searchBar:{
      flexDirection:'row',
      height:40,
      width:'auto',
      borderWidth:0.5,
      alignItems:'center',
      backgroundColor:'grey',
  
    },
    bar:{
      borderWidth:2,
      height:30,
      width:300,
      paddingLeft:10,
    },
    searchButton:{
      borderWidth:1,
      height:30,
      width:50,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'green'
    }
  })
