import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';


export default class MeetingPreview extends Component {
	render() {
		return (
			<TouchableOpacity 
				style={{
					backgroundColor: this.props.color,
					height: 120,
					flexDirection: 'row',
					alignItems: 'center',
				}}
				onPress={() => {}}
			>
				<View style={styles.avatarContainer}>
					<Image 
						source={this.props.avatar}
						style={styles.avatar}
					/>
				</View>

				<View style={styles.infoContainer}>
					<Text style={styles.name}>
						{this.props.initials}
					</Text>
					<Text style={styles.info}>
						{this.props.city}, {this.props.age} года
					</Text>
					<Text style={styles.info}>
						работает {this.props.workPlace}
					</Text>
					<Text style={styles.purpose}>
						{this.props.purpose}
					</Text>
				</View>

				<View style={styles.timeContainer}>
					<Text style={styles.time}>
						{this.props.time}
					</Text>
					<Text style={styles.time}>
						{this.props.date}
					</Text>
				</View>

				<Text style={styles.number}>
					{this.props.number}
				</Text>

				<TouchableOpacity 
					style={styles.iconContainer}
					onPress={() => {}}
				>
					<Image
						source={require('../../assets/images/phoneIcon.png')} 
						style={styles.icon}
					/>
				</TouchableOpacity>
			</TouchableOpacity>
		);
	}
}


const styles = StyleSheet.create({
	avatarContainer: {
		flex: 2,
		justifyContent: 'center',
	},

	avatar: {
		height: 70,
		width: 70,
		marginLeft: '20%',
	},

	infoContainer: {
		flex: 3,
		justifyContent: 'center',
	},

	name: {
		fontSize: 20,
    fontWeight: '400',
    letterSpacing: 0.3,
    marginBottom: '7%',
	},

	info: {
		fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.18,
	},

	purpose: {
		fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.18,
    color: '#00b2f7',
    marginTop: '2%',
	},

	timeContainer: {
		flex: 2,
		alignItems: 'flex-end',
		height: 75,
	},

	time: {
		fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.18,
    color: '#8f8f95',
    marginRight: '10%',
	},

	number: {
		position: 'absolute',
		top: '3%',
		left:'5%',
		fontSize: 14,
    fontWeight: '400',
    letterSpacing: 1.2,
	},

	iconContainer: {
		position: 'absolute',
		top: 'auto',
		bottom: '15s%',
		left: 'auto',
		right: '5%',
	},

	icon: {
		width: 22,
		height: 22,
	},
});