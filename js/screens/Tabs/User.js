import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';

class User extends Component {
    state = {}



    render() {
        return (
            <View style={styles.container}>
                <Header
                    centerComponent={{ text: 'Profile', style: { color: '#fff' } }}
                    statusBarProps={{barStyle: "light-content", }}
                    backgroundColor='black'
                    />            
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>CARP.ca</Text>
                    <Text style={styles.description}>CARP.ca is the online voice of CARP, the non-profit, non-partisan advocacy association, and one of the main ways Canadians can become members and read about CARP in the news. Through CARP.ca, CARP sends out to 90,000 members a biweekly e-newsletter called CARP Action Online that also contains a poll on CARP’s advocacy issues and concerns important to its members. CARP.ca is also the place to get information on advocacy priorities, member benefits and CARP Chapter meetings as well as special social and educational events taking place across Canada.</Text>
                           
                    <Text style={styles.description}>A full social network layer for conversation and connecting … Plus much more! </Text>
             </View>
            </View>
        );
    }
}

export default User;

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