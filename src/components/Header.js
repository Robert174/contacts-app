import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default class Header extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.imageContainer}
					onPress={() => {}}
				>
					<Image 
						source={this.props.icon}
						style={styles.icon}
					/>
				</TouchableOpacity>

				<View style={styles.centerTextContainer}>
					<Text style={styles.textCenter}>
						{this.props.textCenter}
					</Text>
				</View>

				<TouchableOpacity 
					style={styles.rightTextContainer} 
					onPress={() => this.props.nav()}
				>
					<Text style={styles.textRight}>
						{this.props.textRight}
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		width: '100%',
	  height: '11.4%',
	  backgroundColor: '#00b2f7',
	  flexDirection: 'row',
	},

	imageContainer: {
		flex: 2,
	},

	icon: {
		width: 21,
		height: 14,
		marginTop: '55%',
		marginLeft: '15%',
	},

	centerTextContainer: {
		flex: 3,
		alignItems: 'center',
	},

	textCenter: {
		fontSize: 15,
    fontWeight: '400',
    color: '#ffffff',
    letterSpacing: 1.2,
		marginTop: '35%',
	},

	rightTextContainer: {
		flex: 2,
		alignItems: 'flex-end',
	},

	textRight: {
		fontSize: 15,
    fontWeight: '400',
    color: '#ffffff',
    letterSpacing: 1.2,
		marginRight: '15%',
		marginTop: '55%',
	},

}); 