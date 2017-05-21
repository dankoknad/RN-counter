import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Image,
	Button,
} from 'react-native';

import { TabNavigator, addNavigationHelpers } from 'react-navigation';

import Home from './Home';
import HomeContainer from '../containers/HomeContainer';
import Settings from './Settings';
import Info from './Info';


class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Counter',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../icons/home-icon.png')}
        style={[styles.icon]}
      />
    ),
  };

  render() {
    return (
    	<HomeContainer />				
    );
  }
}

class SettingsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../icons/settings-3-icon.png')}
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
        source={require('../icons/info-icon.png')}
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

const tabNavigatorConfigs = {
  Home: {
    screen: HomeScreen,
  },
	Settings: {
    screen: SettingsScreen,
  },
  Info: {
    screen: InfoScreen,
  },
}

const tabBarOptions = {
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
}

export const Navigation = TabNavigator(tabNavigatorConfigs, tabBarOptions);
