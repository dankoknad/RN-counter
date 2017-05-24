
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
	ScrollView,
  View
} from 'react-native';

import { VerticalSeparator } from './common/VerticalSeparator'

export default class Info extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
				<VerticalSeparator height={70} />

        <Text style={[styles.instructions, styles.bigText]}>
          About Counter
        </Text>

				<VerticalSeparator height={20} />

        <Text style={styles.commonText}>
          On this page user will be able to learn about counters (from wikipedia.org) and application developer.
        </Text>
				<Text style={styles.commonText}>
          On this page user will be able to learn about counters (from wikipedia.org) and application developer.
        </Text>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		marginHorizontal: 15,
    backgroundColor: 'white'
  },
  commonText: {
    fontSize: 18,
		marginBottom: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333'
  },
	bigText: {
		fontSize: 30,
	}
});

