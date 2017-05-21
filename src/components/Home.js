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
	Button,
	Slider,
	TouchableOpacity,
	Alert,
} from 'react-native';

import { TabNavigator } from 'react-navigation';

export default class Home extends Component {
  render() {
		const {result, increment, onSubtract, onAdd, onIncrementChange} = this.props
    return (
      <View style={styles.container}>
        <Text style={[styles.instructions, styles.bigText]}>
          Home Page.
        </Text>
				<View style={styles.result}> 
					<Text style={styles.resultText}>
						{result}
					</Text>
				</View>
				
				<Text style={styles.welcome}>
          Drag slider to update increment ({increment})
        </Text>

				<Slider
					style={styles.slider}
					trackStyle={styles.sliderTrack}
					maximumTrackTintColor={'#673ab7'}
					thumbTintColor={'#673ab7'}
					value={increment}
					minimumValue={1}
					maximumValue={10}
					step={1}
					onValueChange={(value) => onIncrementChange(value)}
				/>

				<View style={styles.btnsContainer}>
					<TouchableOpacity
						onPress={() => onSubtract(result, increment)}
						activeOpacity={.6}
						style={styles.button}
					>
						<Text style={styles.btnText}>- {this.props.increment}</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						onPress={() => this.props.onAdd(this.props.result, this.props.increment)}
						disabled={!true}
						activeOpacity={.6}
						style={styles.button}
					>
						<Text style={styles.btnText}>+ {this.props.increment}</Text>
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
    // backgroundColor: '#fff',
  },
	result: {
    alignItems: 'center',
		minWidth: 150,
		padding: 20,
		marginBottom: 20,
		borderRadius: 3,
		// backgroundColor: 'lightblue',
		backgroundColor: '#9a67ea',
	},
	resultText: {
		color: '#fff',
		fontSize: 40,
	},
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 15,
  },
	bigText: {
		fontSize: 30,
	},
	btnsContainer: {
		alignSelf: 'stretch',
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginHorizontal: 50,
	},
	button: {
		backgroundColor: '#9a67ea',
		borderRadius: 3,
	},
	btnText: {
		padding: 20,
		fontSize: 18,
		color: '#fff',
	},
	slider: {
		alignSelf: 'stretch',
		marginBottom: 50,
    height: 50,
    margin: 10,
  },
	sliderTrack: {
		height: 15,
		backgroundColor: 'red',
	},
});

