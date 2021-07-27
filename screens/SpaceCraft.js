import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Alert,
    FlatList,
    Image,
    ImageBackground,
} from "react-native";
import axios from "axios";

export default class SpaceCraft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aircrafts: {},
        };
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axios
            .get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
            .then(response => {
                this.setState({ aircrafts: response.data.results })
                console.log(response.data.results)
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }

    renderItem = ({ item }) => {
        return (
            <View style={{borderWidth:1,justifyContent:'center',alignItems:'center',marginBottom:10,elevation:10}}>
                <Image 
                source={{uri: item.agency.image_url}} style={{width: "100%", height:200, marginTop:15, marginBottom:15, marginRight:10 }}></Image>
                        
                <Text style={{fontWeight:'bold', fontSize:20}}>{item.name}</Text>
                <Text style={{color:'#696969'}}>{item.agency.name}</Text>
                <Text>DESCRIPTION</Text>
                <Text style={{color:'#A9A9A9', marginTop: 10, marginLeft: 10 }}>{item.agency.description}</Text>      
            </View>
        );
    };

    keyExtractor = (item, index) => index.toString();

    render() {
        if (Object.keys(this.state.aircrafts).length === 0) {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Text>Loading</Text>
                </View>
            )
        } else {
            return (
                <View 
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <ImageBackground source={require('../assets/stars.gif')} style={{flex: 1, resizeMode: 'cover'}}>
                <View styles={{flex:0.25}}>
                    <Text>Space Crafts</Text>
                </View>
                <View styles={{flex:0.75}}>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.aircrafts}
                        renderItem={this.renderItem}
                    />
                    </View>
                    </ImageBackground>
                </View >
            );
        }

    }
}
