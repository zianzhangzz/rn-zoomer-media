import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, Animated, Easing, StyleSheet, ImageBackground } from 'react-native';

class Splash extends Component {
    state = {  }
    componentWillMount() {
        this.opacity = new Animated.Value(0);
      }
    componentDidMount() {
        Animated.timing(this.opacity, {
            toValue: 1,
            duration: 1000,
            easing: Easing.ease,
          }).start();        
    }
    render() {
        return (
            <View style={styles.container}>
                {/* <ImageBackground style={styles.background} source={require('../../res/splash.jpg')}>   */}
                    <StatusBar
                        backgroundColor="transparent"
                        barStyle="dark-content"
                    />
                    {/* <Image style={{width: 250, height: 50}} source={require('../../res/brand.jpg')}/> */}

                    <Animated.View style={{opacity: this.opacity, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={styles.brand}>
                                ZoomerMedia 
                        </Text>
                        <Text style={styles.brand}>
                            Limited
                        </Text>
                        <TouchableOpacity 
                                style={styles.btn}
                                onPress={() => this.props.navigation.navigate('Index')}>
                                <Text style={styles.text}>
                                    Login
                                </Text>
                        </TouchableOpacity>
                    </Animated.View>
                    {/* </ImageBackground> */}
            </View>            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 300,
        width: 250,
        height: 45,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 30,
    },
    brand: {
        backgroundColor: 'transparent',
        color: 'black',
        fontWeight: '700',
        fontSize: 28,
    },
    text: {
        color: 'black',
        fontWeight: '600',
        fontSize: 18
    }
})
export default Splash;