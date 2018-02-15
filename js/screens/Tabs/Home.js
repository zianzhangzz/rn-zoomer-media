import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';

class Home extends Component {
    state = {}

    render() {
        return (
            <View style={styles.container}>
            <Header
                centerComponent={{ text: 'ZoomerMedia', style: { color: '#fff' } }}
                statusBarProps={{barStyle: "light-content", }}
                backgroundColor='black'
                />
            
                
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>EverythingZoomer.com</Text>
                    <Text style={styles.description}>Lifestyle site for the discriminating,
                          with features ranging from food and entertaining,
                          style and fashion, arts and entertainment, sex and relating,
                          health, finance, travel and spirit.</Text>
                           
                    <Text style={styles.description}>A full social network layer for conversation and connecting … Plus much more! </Text>
                    
                </View>
            </View>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f4f4',
        flex: 1,
        
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 22,
        paddingBottom: 20,
        textAlign: 'center'
        
    },
    description: {
        fontSize: 16,
        paddingBottom: 10,
        textAlign: 'center'
        
    }

})