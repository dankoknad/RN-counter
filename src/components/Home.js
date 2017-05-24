
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
	ScrollView,
	Button,
	Slider,
	TouchableOpacity,
	Alert,
	Image
} from 'react-native';

import { TabNavigator } from 'react-navigation';
import { VerticalSeparator } from './common/VerticalSeparator'

export default class Home extends Component {
  render() {
		const {result, increment, onSubtract, onAdd, onResetResult, onIncrementChange, isLocked} = this.props
    return (
      <ScrollView style={styles.container}>

				<VerticalSeparator height={70}/>
				
				<View style={styles.resultContainer}>

					<TouchableOpacity 
							onPress={() => onResetResult()}
							disabled={!true}
							activeOpacity={.6}
							style={styles.resetBtn}
						>
							<Text style={styles.resetBtnText}> reset</Text>
						</TouchableOpacity>
						
					<View style={styles.result}> 
						<Text style={styles.resultText}>
							{result}
						</Text>
					</View>
				
				</View>

				<VerticalSeparator height={30}/>
				
				<Text style={styles.welcome}>
           {isLocked.slider ? `Unlock slider on settings page\n(current increment: ${increment})` : `Drag slider to update increment (${increment})` }
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
					disabled={isLocked.slider}
				/>

				<View style={styles.btnsContainer}>
					<TouchableOpacity
						onPress={() => onSubtract(result, increment)}
						activeOpacity={.6}
						style={styles.button}
						disabled={isLocked.subtractBtn}
					>
						<Text style={styles.btnText}>{isLocked.subtractBtn ? <Image source={require('../icons/locked-icon.png')} style={styles.lockerIcon}/> : `- ${increment}`}</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						onPress={() => onAdd(result, increment)}
						disabled={!true}
						activeOpacity={.6}
						style={styles.button}
						disabled={isLocked.addBtn}
					>
						<Text style={styles.btnText}>{isLocked.addBtn ? <Image source={require('../icons/locked-icon.png')} style={styles.lockerIcon}/> : `+ ${increment}`}</Text>
					</TouchableOpacity>
				</View>

				<VerticalSeparator height={20}/>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
	vertical50: {
		height: 50
	},
	resultContainer: {
		flexDirection: 'row',
		alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
		// backgroundColor: 'red'
	},
	resetBtn: {
		alignSelf: 'center',
		left: -70,
		// backgroundColor: 'orange',
		borderRadius: 3
	},
	resetBtnText: {
		fontSize: 18,
		padding: 10
	},
	result: {
    alignItems: 'center',
		minWidth: 120,
		padding: 20,
		borderRadius: 3,
		backgroundColor: '#9a67ea',
		right: 30
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
	btnsContainer: {
		alignSelf: 'stretch',
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginHorizontal: 50,
	},
	button: {
		backgroundColor: '#9a67ea',
		borderRadius: 3,
		justifyContent: 'center'
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
	lockerIcon: {
		width: 50, 
		height: 50
	}
});

