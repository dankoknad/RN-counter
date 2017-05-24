
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
		const {isLocked, onToggleAdd, onToggleSubtract, onToggleSlider} = this.props
		console.log(isLocked);
    return (
      <ScrollView style={styles.container}>
				<VerticalSeparator height={50}/>
				
				<Text style={[styles.instructions, styles.bigText]}>
          Enable/disable buttons
        </Text>

				<VerticalSeparator height={10}/>

				<View style={styles.switchBtnRow}>
					<Text style={styles.mediumText}>{(isLocked.addBtn) ? 'Unlock add button' : 'Lock add button'}</Text>
					<Switch 
						onValueChange={(bool) => onToggleAdd(bool)}
          	value={isLocked.addBtn}
					/>
				</View>
				<View style={styles.switchBtnRow}>
					<Text style={styles.mediumText}>{(isLocked.subtractBtn) ? 'Unlock subtract button' : 'Lock subtract button'}</Text>
					<Switch 
						onValueChange={(bool) => onToggleSubtract(bool)}
          	value={isLocked.subtractBtn}
					/>
				</View>
				<View style={styles.switchBtnRow}>
					<Text style={styles.mediumText}>{(isLocked.slider) ? 'Unlock increment step slider' : 'Lock increment step slider'}</Text>
					<Switch 
						onValueChange={(bool) => onToggleSlider(bool)}
          	value={isLocked.slider}
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
					<Text style={[styles.instructions, styles.bigText]}>
						Todo:
					</Text>
					<VerticalSeparator height={10}/>
					<Text style={styles.mediumText}>
						1. allow position righ for reset button
					</Text>
					<Text style={styles.mediumText}>
						2. add sound (+ on/off) on pressing the buttons
					</Text>
					<Text style={styles.mediumText}>
						3. slider settings controls
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
		paddingHorizontal: 20,
	},
	switchBtnRow: {
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		alignItems: 'center', 
		height: 50,
		marginHorizontal: 15
	}
});

