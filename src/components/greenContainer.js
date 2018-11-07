import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


export default class GreenContainer extends Component {
	render() {
		return (
			<TouchableOpacity
				onPress={this.props.callback()}
			>
				<View style={styles.container}>
					<Text style={styles.textInput}>
						{this.props.textInput}
					</Text>
				</View>
	
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		marginLeft: '3%',
		width: '94%',
		height: 65,
		borderColor: '#97d500',
    	borderStyle: 'solid',
    	borderWidth: 2,
    	borderRadius: 10,
    	alignItems: 'center',
    	justifyContent: 'center',
	},

	textInput: {
		color: '#97d500',
		fontSize: 15,
    	fontWeight: '700'
	},
});