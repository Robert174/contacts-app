import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default class InfoString extends Component {
	render() {
		return (
			<View>
				<View  style={styles.infoString}>
					<View style={styles.keyContainer}>
						<Text style={styles.left}>
							{this.props.left}
						</Text>
					</View>
					<View style={styles.rightContainer}>
						<Text style={styles.right}>
							{this.props.right}
						</Text>
					</View>
				</View>
				<View style={styles.line}>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	line: {
		width: '90%',
		height: 0.5,
		backgroundColor: '#4e606e',
    	opacity: 0.4,
    	marginLeft: '10%',
	},

	keyContainer: {
		flex: 1,
		justifyContent: 'center',
	},

	left: {
		marginLeft: '10%',
		color: '#333333',
    letterSpacing: 1.2,
    fontSize: 16,
    fontWeight: '400',
	},

	infoString: {
		height: 50,
		width: '100%',
		flexDirection: 'row',
	},

	rightContainer: {
		flex: 1,
		justifyContent: 'center',
	},

	right: {
		color: '#8f8f95',
    letterSpacing: 1.2,
    fontSize: 15,
    fontWeight: '400',
    marginLeft: '20%',
	},

});