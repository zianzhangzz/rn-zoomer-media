import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';

class Radio extends Component {
    state = {}

    render() {
        return (
            <View style={styles.container}>
                <Header
                    centerComponent={{ text: 'Radio', style: { color: '#fff' } }}
                    statusBarProps={{barStyle: "light-content", }}
                    backgroundColor='black'
                    />                
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>ZoomerRadio.ca/am740.ca</Text>

                    <Text style={styles.description}>Allows listeners around the world to hear the last music station on the AM dial in the Greater Toronto Area in CD-quality sound,  delivered in a 128-k stereo stream. </Text>

                    <Text style={styles.title}>ClassicalFM.ca</Text>
                    <Text style={styles.description}>Classical music fans around the world can listen live to Canada’s only commercial all-classical radio stations — Classical96.3fm, Classical102.9fm, and Classical103.1fm</Text>
                           
                    
                </View>
            </View>
        );
    }
}

export default Radio;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4'
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