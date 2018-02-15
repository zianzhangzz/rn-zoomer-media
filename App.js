import React from 'react';
import { View } from 'react-native';
import { StackNavigator, TabNavigator} from 'react-navigation';
import { AppLoading, Asset, Font } from 'expo';
import Splash from './js/screens/Splash';
import Index from './js/screens/Index';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
          <RootStack />
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./res/home2.jpg'),
        require('./res/splash.jpg'),
        require('./res/card.jpg'),
        require('./res/notebook.jpg'),
        require('./res/brand.jpg')

      ]),
      // Font.loadAsync({
      //   // This is the font that we are using for our tab bar
      //   ...Ionicons.font,
      //   // We include SpaceMono because we use it in HomeScreen.js. Feel free
      //   // to remove this if you are not using it in your app
      //   'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      // }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const RootStack = StackNavigator(
  {
    Index: {
      screen: Index,
    },
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null
      }
    },
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'modal'
  }
);

