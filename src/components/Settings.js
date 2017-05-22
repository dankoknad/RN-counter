/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
	TouchableOpacity,
	Alert,
} from 'react-native';

export default class Info extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.instructions, styles.bigText]}>
          Settings Page{'\n'}says Hello!
        </Text>
        <Text style={styles.welcome}>
          On this page user will be able to{'\n'}lock/unlock slider and disable/enable buttons.
        </Text>
				<Text style={[styles.instructions, styles.bigText]}>
          Slider settings
        </Text>
				<Text style={[styles.fullWidth]}>
          Min value: 1
        </Text>
				<Text style={[styles.fullWidth]}>
          Max value: 10
        </Text>
				<Text style={[styles.fullWidth]}>
          Steps: 1
        </Text>

				<Text style={[styles.instructions, styles.bigText]}>
          Enable/disable buttons
        </Text>

				<View style={styles.btnsContainer}>
					<TouchableOpacity 
						onPress={() => Alert.alert(
							'Alert 01 Title',
							'alertMessage',
							[{text: 'Dismiss alert 01'}],
						)}
						activeOpacity={.6}
						style={styles.button}
					>
						<Text style={styles.btnText}>btn 01</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						onPress={() => Alert.alert(
							'Alert 02 Title',
							'alertMessage',
							[{text: 'Dismiss alert 02'}],
						)}
						disabled={true}
						activeOpacity={.6}
						style={styles.button}
					>
						<Text style={styles.btnText}>btn 02 (disabled)</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						onPress={() => Alert.alert(
							'Alert 03 Title',
							'alertMessage',
							[{text: 'Dismiss alert 03'}],
						)}
						activeOpacity={.6}
						style={styles.button}
					>
						<Text style={styles.btnText}>btn 03</Text>
					</TouchableOpacity>
				</View>
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
	},
	fullWidth: {
		alignSelf: 'stretch',
		paddingHorizontal: 20,
	},
	btnsContainer: {
		alignSelf: 'stretch',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	button: {
		marginHorizontal: 10,
		backgroundColor: '#9a67ea',
		borderRadius: 3,
	},
	btnText: {
		padding: 10,
		fontSize: 18,
		color: '#fff',
	}
});

