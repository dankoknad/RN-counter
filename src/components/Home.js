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
} from 'react-native';

import { TabNavigator } from 'react-navigation';

export default class Home extends Component {
	static defaultProps = {
    value: 2,
  };

  state = {
    value: this.props.value,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.instructions, styles.bigText]}>
          Home Page.
        </Text>
				<View style={styles.result}> 
					<Text style={styles.resultText}>
						{this.state.value}
					</Text>
				</View>
				<Slider
					style={styles.slider}
					value={this.props.value}
					minimumValue={1}
					maximumValue={10}
					step={1}
					onValueChange={(value) => this.setState({value: value})}
				/>
				<Text style={styles.welcome}>
          Drag slider to update result
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
	result: {
    alignItems: 'center',
		minWidth: 150,
		borderRadius: 5,
		backgroundColor: 'lightblue',
	},
	resultText: {
		fontSize: 40,
		padding: 20,
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
	slider: {
		alignSelf: 'stretch',
    height: 30,
    margin: 10,
  },
});

