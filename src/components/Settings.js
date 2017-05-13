/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Info extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.instructions, styles.bigText]}>
          Settings Page
        </Text>
        <Text style={styles.welcome}>
          On this page user will be able to {'\n'} lock/unlock slider and disable/enable buttons.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
	bigText: {
		fontSize: 30,
	}
});

