import React, { Component } from 'react';
import { Text, 
         View, 
         TextInput, 
         StyleSheet, 
         Platform, 
         StatusBar, 
         SafeAreaView, 
         ImageBackground,
         Image
     } from 'react-native';
import { WebView } from 'react-native-webview';

export default class StarMapScreen extends Component {
    constructor() {
        super()
        this.state = {
            longitude: '',
            latitude: ''
        }
    }
    render() {
        const { longitude, latitude } = this.state;
        const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=
        true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`

        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/starmapcover.jpg')} style={styles.backgroundImage}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Star Map</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your latitude"
                        placeholderTextColor="white"
                        onChangeText={(text) => {
                            this.setState({
                                latitude: text
                            })
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your longitude"
                        placeholderTextColor="white"
                        onChangeText={(text) => {
                            this.setState({
                                longitude: text
                            })
                        }}
                    />
                </View>
                <WebView
                    scalesPageToFit={true}
                    source={{ uri: path }}
                    style={{ marginTop: 20, marginBottom: 20, }}
                />
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "purple",
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleContainer:{
        flex: 0.3, 
        marginTop: 20, 
        alignItems: 'center'
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center",
        alignContent: "center",
    },
    input: {
        height: 30,
        width: 180,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        textAlign: 'center',
        color: 'white',
    }
})
