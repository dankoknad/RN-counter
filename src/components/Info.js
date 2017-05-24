
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
				<VerticalSeparator height={50} />

        <Text style={[styles.instructions, styles.bigText]}>
          Tally counter
        </Text>

				<VerticalSeparator height={20} />

        <Text style={styles.commonText}>
          A tally counter is a mechanical, electronic, or software device used to incrementally count something, typically fleeting. One of the most common things tally counters are used for is counting people, animals, or things that are quickly coming and going from some location.
        </Text>
				
				<Text style={styles.commonText}>
          Mechanical tally counter:
        </Text>

				<LocalImage
          source={require('../img/mechanical_tally_counters.jpg')}
					originalWidth={800}
					originalHeight={600}
        />

				<VerticalSeparator height={10} />

				<Text style={styles.commonText}>
          Digital tally counter:
        </Text>

				<LocalImage
          source={require('../img/digital_tally_counter.jpg')}
					originalWidth={449}
					originalHeight={599}
        />

				<VerticalSeparator height={20} />

				<Text>Source: wikipedia.org</Text>

				<VerticalSeparator height={20} />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		paddingHorizontal: 15,
    backgroundColor: '#fff'
  },
  commonText: {
    fontSize: 18,
		marginBottom: 10
  },
  instructions: {
    textAlign: 'center',
  },
	bigText: {
		fontSize: 30,
	}
});

