
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
	ScrollView,
  View,
	Image,
	Dimensions
} from 'react-native';

import { VerticalSeparator } from './common/VerticalSeparator'
import { LocalImage } from './common/LocalImage'

export default class Info extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
				<VerticalSeparator height={70} />

        <Text style={[styles.instructions, styles.bigText]}>
          Tally counter
        </Text>

				<VerticalSeparator height={20} />

        <Text style={styles.commonText}>
          A tally counter is a mechanical, electronic, or software device used to incrementally count something, typically fleeting. One of the most common things tally counters are used for is counting people, animals, or things that are quickly coming and going from some location.
        </Text>
				
				<LocalImage
          source={require('../img/mechanical_tally_counters.jpg')}
					originalWidth={800}
					originalHeight={600}
        />

				<Text style={styles.commonText}>
          On this page user will be able to learn about counters (from wikipedia.org) and application developer.
        </Text>

				<LocalImage
          source={require('../img/digital_tally_counter.jpg')}
					originalWidth={449}
					originalHeight={599}
        />

				<VerticalSeparator height={70} />

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

