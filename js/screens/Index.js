import React from 'react';
import { TabNavigator, TabBarBottom  } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import Home from './Tabs/Home';
import Print from './Tabs/Print';
import Radio from './Tabs/Radio';
import TV from './Tabs/TV';
import User from './Tabs/User';

export default TabNavigator({
  Home: { screen: Home },
  Print: { screen: Print },
  Radio: { screen: Radio },
  TV: { screen: TV },
  User: { screen: User },
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-home${focused ? '' : '-outline'}`;
      } else if (routeName === 'Print') {
        iconName = `ios-bookmarks${focused ? '' : '-outline'}`;
      } else if (routeName === 'Radio') {
        iconName = `ios-radio${focused ? '' : '-outline'}`;
      } else if (routeName === 'TV') {
        iconName = `ios-film${focused ? '' : '-outline'}`;
      } else if (routeName === 'User') {
        iconName = `ios-person${focused ? '' : '-outline'}`;
      }
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
}
);