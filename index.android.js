/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	StyleSheet,
  AppRegistry,  
	View,
	Image,
	Button,
} from 'react-native';

import { TabNavigator } from 'react-navigation';

import Home from './src/components/Home';
import Info from './src/components/Info';

/*export default class RNCounter extends Component {
  render() {
    return (
      <View>
        <Home />
      </View>
    );
  }
}*/


class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Counter',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./home-icon.png')}
        style={[styles.icon]}
      />
    ),
  };

  render() {
    return (
    	<Home />				
    );
  }
}

class InfoScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Info',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./info-icon.png')}
        style={[styles.icon]}
      />
    ),
  };

  render() {
    return (
      <Info />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const RNCounter = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Info: {
    screen: InfoScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#fff',
		showIcon: true,
		labelStyle: {
			fontSize: 20,
		},
  },
});

AppRegistry.registerComponent('RNCounter', () => RNCounter);
