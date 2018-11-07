import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';


export default class Search extends Component {
	render() {
		return (
			<View style={styles.container}> 
				<Image 
					source={require('../../assets/images/searchIcon.png')}
					style={styles.icon}
				/>

				<TextInput 
					style={styles.search} 
					placeholder='Поиск'
				/>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		marginTop: '5%',
		width: '90%',
		height: 50,
		borderColor: '#cacecf',
    	borderStyle: 'solid',
    	borderWidth: 1,
    	borderRadius: 50,
    	flexDirection: 'row',
    	alignItems: 'center',
  	},

  	icon: {
		marginTop: '6%',
		marginLeft: '5%',
  		width: 18,
  		height: 18,
  	},

  	search: {
  		height: 20,
  		width: '80%',
  		marginTop: '5%',
  		marginLeft: '3.5%',
  	},
});