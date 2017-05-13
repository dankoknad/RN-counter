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
import Settings from './src/components/Settings';
import Info from './src/components/Info';


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

class SettingsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./settings-3-icon.png')}
        style={[styles.icon]}
      />
    ),
  };

  render() {
    return (
      <Settings />
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
	Settings: {
    screen: SettingsScreen,
  },
  Info: {
    screen: InfoScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#fff',
		showIcon: true,
		labelStyle: {
			fontSize: 18,
		},
		style: {
			// backgroundColor: '#673ab7',
			backgroundColor: '#9a67ea',
		},
		indicatorStyle: {
			backgroundColor: '#673ab7',
			height: 5,
		},
  },
});

AppRegistry.registerComponent('RNCounter', () => RNCounter);
