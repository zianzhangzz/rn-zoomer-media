import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';

class TV extends Component {
    state = {}



    render() {
        return (
            <View style={styles.container}>
                <Header
                    centerComponent={{ text: 'TV Channels', style: { color: '#fff' } }}
                    statusBarProps={{barStyle: "light-content", }}
                    backgroundColor='black'
                    />            
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>VisionTV.ca</Text>

                    <Text style={styles.description}>On VisionTV.ca, viewers of Canada’s only multi-faith channel can access daily show schedules, stream original documentaries on subjects from the apocalypse to world religions and matters of the heart, enter contests and catch up on their favourite episodes of much-loved series like the award-winning British soap EastEnders, the classic Upstairs, Downstairs and, coming soon, Season 3 of the Emmy-winning runaway hit miniseries Downton Abbey. </Text>

                    <Text style={styles.title}>ONEtv.ca</Text>
                    <Text style={styles.description}>ONETV: GET FIT boasts a rich library of health and wellness programs from Veria TV, the leading U.S. content provider in the genre. Articles highlight monthly themed programming, yoga and meditation tips. Daily schedules feature shows for body, mind, spirit, and love.</Text>
                </View>
                    
            </View>
        );
    }
}

export default TV;

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