/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
	ScrollView,
  View
} from 'react-native';

export default class Info extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
				<Text style={styles.welcome}>
          Danko says Hello!
        </Text>
        <Text style={[styles.instructions, styles.bigText]}>
          Info Page
        </Text>
        <Text style={styles.welcome}>
          On this page user will be able to learn about counters (from wikipedia.org) and application developer.
        </Text>

				<Text style={styles.welcome}>
          Danko says Hello!
        </Text>
        <Text style={[styles.instructions, styles.bigText]}>
          Info Page
        </Text>
        <Text style={styles.welcome}>
          On this page user will be able to learn about counters (from wikipedia.org) and application developer.
        </Text>

				<Text style={styles.welcome}>
          Danko says Hello!
        </Text>
        <Text style={[styles.instructions, styles.bigText]}>
          Info Page
        </Text>
        <Text style={styles.welcome}>
          On this page user will be able to learn about counters (from wikipedia.org) and application developer.
        </Text>

				<Text style={styles.welcome}>
          Danko says Hello!
        </Text>
        <Text style={[styles.instructions, styles.bigText]}>
          Info Page
        </Text>
        <Text style={styles.welcome}>
          On this page user will be able to learn about counters (from wikipedia.org) and application developer.
        </Text>

				<Text style={styles.welcome}>
          Danko says Hello!
        </Text>
        <Text style={[styles.instructions, styles.bigText]}>
          Info Page
        </Text>
        <Text style={styles.welcome}>
          On this page user will be able to learn about counters (from wikipedia.org) and application developer.
        </Text>

				<Text style={styles.welcome}>
          Danko says Hello!
        </Text>
        <Text style={[styles.instructions, styles.bigText]}>
          Info Page
        </Text>
        <Text style={styles.welcome}>
          On this page user will be able to learn about counters (from wikipedia.org) and application developer.
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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

