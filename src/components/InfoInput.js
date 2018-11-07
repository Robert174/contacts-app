import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';

export default class InfoInput extends Component {
	render() {
		return (
			<View style={styles.cont}>
				<View style={styles.container}>
					<Text style={styles.left}>
						{this.props.left}
					</Text>
					<TextInput 
						style={styles.info}
						onChangeText={this.props.callback}
						secureTextEntry={this.props.secure}
						autoCapitilize='none'
						autoCorrect={false}
					/>
				</View>
				<View style={styles.line}>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	cont: {
		height: 60,
		width: '100%',
	},
	container: {
		height: '95%',
		flexDirection: 'row',
	},


	left: {
		marginTop: 19,
		flex: 1,
		marginLeft: 10,
		fontSize: 16,
    	fontWeight: '700',
    	color: '#333333',
    	letterSpacing: 1.2,
	},

	info: {
		flex: 3,
		fontSize: 16,
    	fontWeight: '400',
    	color: '#333333',
    	letterSpacing: 1.2,
	},

	line: {
		width: '90%',
		height: 0.5,
		backgroundColor: '#4e606e',
    	opacity: 0.4,
    	marginLeft: '5%',
	},
});