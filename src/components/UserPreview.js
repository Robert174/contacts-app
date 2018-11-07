import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default class UserPreview extends Component{
	render() {
		let letters = this.props.name.split('');
		let op = 1;
		let keyNum = 0;

		return(
			<TouchableOpacity 
				style={styles.container}
				onPress={() => this.props.nav()}
			>
				<View style={styles.avatarContainer}>
					<Image
						style={styles.avatar}
						source={this.props.avatar}
					/>
				</View>

				<View style={styles.nameContainer}>
					{
						letters.map((letter, index) => 
								letters.length > 14
									? index < 13
										? <Text
												key={keyNum++} 
												style={styles.name}
											>
												{letter}
											</Text>
										: <Text
												key={keyNum++} 
												style={{
													fontSize: 17,
											    fontWeight: '400',
											    letterSpacing: 0.3,
											    opacity: op -= 0.3,
											    color: '#21262c',
												}}
											>
												{letter}
											</Text>
									: <Text
											key={keyNum++} 
											style={styles.name}
										>
											{letter}
										</Text>
						)
					}
				</View>

				<TouchableOpacity 
					style={styles.iconContainer}
					onPress={() => {}}
				>
					<Image
						style={styles.icon}
						source={require('../../assets/images/profileIcon.png')}
					/>
					<Text style={styles.notifications}>
						{this.props.profileNotes}
					</Text>
				</TouchableOpacity>

				<TouchableOpacity 
					style={styles.iconContainer}
					onPress={() => {}}
				>
					<Image
						style={styles.icon}
						source={require('../../assets/images/messageIcon.png')}
					/>
					<Text style={styles.notifications}>
						{this.props.messageNotes}
					</Text>
				</TouchableOpacity>

				<TouchableOpacity 
					style={styles.iconContainer}
					onPress={() => {}}
				>
					<Image
						style={styles.icon}
						source={require('../../assets/images/phoneIcon.png')}
					/>
					<Text style={styles.notifications}>
						{this.props.callNotes}
					</Text>
				</TouchableOpacity>

				<View style={styles.line}>
				</View>
			</TouchableOpacity>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 100,
		flexDirection: 'row',
	},

	avatarContainer: {
		flex: 3,
		justifyContent: 'center',
	}, 

	avatar: {
		height: 70,
		width: 70,
		marginLeft: '15%',
	},

	nameContainer: { 
		flex: 4,
		alignItems: 'center',
		flexDirection: 'row',
		overflow: 'hidden',
	},

	name: {
		fontSize: 17,
    fontWeight: '400',
    letterSpacing: 0.3,
	},

	iconContainer: {
		flex: 1,
		justifyContent: 'center',
	}, 

	icon: {
		width: 22,
		height: 22,
	},

	notifications: {
		position: 'absolute',
		fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.18,
    top: '35%',
    left: '50%',
	},

	line: {
		width: '70%',
		position: 'absolute',
		top: '99%',
		left: '25%',
		height: 0.5,
		backgroundColor: '#4e606e',
    opacity: 0.4,
	},
});
