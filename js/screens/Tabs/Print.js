import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';

class Print extends Component {
    state = {}

    render() {
        return (
            <View style={styles.container}>
                <Header
                    centerComponent={{ text: 'Magazine', style: { color: '#fff' } }}
                    statusBarProps={{barStyle: "light-content", }}
                    backgroundColor='black'
                    />
                
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>Zoomer Magazine</Text>
                    <Text style={styles.description}>
                        From finance, fitness, food and travel to health, beauty, 
                        fashion and ideas, Zoomer magazine spots the trends, 
                        celebrates the heroes and offers indispensable advice.
                    </Text>
                    
                    <Text style={styles.description}>Zoomer magazine is not just the essential source of news, ideas and information for the 45-plus, it’s the eyes and ears, the voice and the advocate for a generation.</Text>
                    
                </View>
            </View>
        );
    }
}

export default Print;

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