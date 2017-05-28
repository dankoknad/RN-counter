
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
	TouchableOpacity,
	Alert,
	Switch
} from 'react-native';

import { VerticalSeparator } from './common/VerticalSeparator'

export default class Info extends Component {
  render() {
		const {isLocked, onToggleReset, onToggleAdd, onToggleSubtract, onToggleSlider, onChangeResetBtnPosition, isResetBtnOnRightSide, isSwapBtnsPositionOn, onSwapButtons} = this.props
    return (
      <ScrollView style={styles.container}>
				<VerticalSeparator height={50}/>
				
				<Text style={[styles.instructions, styles.bigText]}>
          Buttons
        </Text>

				<VerticalSeparator height={10}/>

				<View style={styles.switchBtnRow}>
					<Text style={styles.mediumText}>Lock add button</Text>
					<Switch 
						onValueChange={(bool) => onToggleAdd(bool)}
          	value={isLocked.addBtn}
					/>
				</View>
				<View style={styles.switchBtnRow}>
					<Text style={styles.mediumText}>Lock subtract button</Text>
					<Switch 
						onValueChange={(bool) => onToggleSubtract(bool)}
          	value={isLocked.subtractBtn}
					/>
				</View>
				<View style={styles.switchBtnRow}>
					<Text style={styles.mediumText}>Lock increment step slider</Text>
					<Switch 
						onValueChange={(bool) => onToggleSlider(bool)}
          	value={isLocked.slider}
					/>
				</View>

				<VerticalSeparator height={1} fill={'#e0e0d1'} />

				<View style={[styles.switchBtnRow]}>
					<Text style={styles.mediumText}>Swap '-' and '+' buttons</Text>
					<Switch 
						onValueChange={(bool) => onSwapButtons(bool)}
          	value={isSwapBtnsPositionOn}
					/>
				</View>
				<View style={[styles.switchBtnRow]}>
					<Text style={styles.mediumText}>Move reset button to the right</Text>
					<Switch 
						onValueChange={(bool) => onChangeResetBtnPosition(bool)}
          	value={isResetBtnOnRightSide}
					/>
				</View>
				<View style={styles.switchBtnRow}>
					<Text style={styles.mediumText}>Hide reset button</Text>
					<Switch 
						onValueChange={(bool) => onToggleReset(bool)}
          	value={isLocked.resetBtn}
					/>
				</View>				
				
				<VerticalSeparator height={30} />
				
				<View style={styles.fullWidth}>
					<Text style={[styles.instructions, styles.bigText]}>
						Slider settings
					</Text>
					<VerticalSeparator height={10}/>
					<Text style={styles.mediumText}>
						Min value: 1
					</Text>
					<Text style={styles.mediumText}>
						Max value: 10
					</Text>
					<Text style={styles.mediumText}>
						Steps: 1
					</Text>

				</View>

				<View style={styles.fullWidth}>
					<Text style={[styles.instructions, styles.mediumText]}>
						Todo:
					</Text>
					<VerticalSeparator height={10}/>
					<Text>
						1. add sound (+ on/off) on pressing the buttons
					</Text>
					<Text>
						2. slider settings controls
					</Text>

				</View>

				<VerticalSeparator height={30}/>
				
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
  },
	mediumText: {
		fontSize: 20,
	},
	bigText: {
		fontSize: 30,
	},
	fullWidth: {
		alignSelf: 'stretch',
	},
	switchBtnRow: {
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		alignItems: 'center', 
		height: 50
	}
});

