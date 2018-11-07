import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class Footer extends Component {
  render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.leftContainer}
					onPress={() => {}}
				>
					<Text style={styles.leftText}>
						{this.props.textLeft}
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.rightContainer}
					onPress={() => {}}
				>
					<Text style={styles.rightText}>
						{this.props.textRight}
					</Text>
				</TouchableOpacity>
			</View>
		);
  }
}


const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginTop: 'auto',
		width: '100%',
		height: '10%',
	},

	leftContainer: {
		flex: 1,
		backgroundColor: '#00b2f7',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: '0.05%'
	},

	rightContainer: {
		flex: 1,
		backgroundColor: '#00b2f7',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: '0.05%',
	},

	rightText: {
		color: '#ffffff',
    letterSpacing: 0.24,
    fontSize: 15,
    fontWeight: '300',
	},

	leftText: {
		color: '#ffffff',
    letterSpacing: 0.24,
    fontSize: 15,
    fontWeight: '300',
	},


});
