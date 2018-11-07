import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import InfoString from '../components/InfoString.js';
import GreenContainer from '../components/greenContainer.js';
import { Actions } from 'react-native-router-flux';

export default class MeetingsScreen extends Component {
	static navigationOptions = {
		header: null,
	};
	
	render() {
		return(
			<View style={styles.container}>
				<Image
					style={styles.underBackground} 
					source={require('../../assets/images/back.png')}
				/>
				<View style={styles.topContainer}>
					<View style={styles.header}>
						<TouchableOpacity
							style={styles.burerIconContainer}>
								<Image
								style={styles.burerIcon}
								source={require('../../assets/images/burerIcon.png')}
						  />
						</TouchableOpacity>
						<View style={styles.centralTextContainer}>
							<Text style={styles.centralText}>
								Контакт
							</Text>
						</View>
						<TouchableOpacity 
							style={styles.textRightContainer}
							onPress={() => Actions.pop()}
						>
							<Text style={styles.textRight}>
								К списку{' '}
							</Text>
							<Image
								style={styles.arrow}
								source={require('../../assets/images/rightArrowIcon.png')}
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.imagesContainer}>
						<View style={styles.messageContainer}>
							<TouchableOpacity style={styles.iconContainer}>
								<Image
									style={styles.icon}
									source={require('../../assets/images/messageIcon.png')}
								/>
							</TouchableOpacity>
						</View>
						<View style={styles.avatarContainer}>
							<Image
								style={styles.avatar}
								source={require('../../assets/images/profAvatar.png')}
							/>
						</View>
						<View style={styles.phoneContainer}>
							<TouchableOpacity style={styles.iconContainer}>
								<Image
									style={styles.icon}
									source={require('../../assets/images/phoneIcon.png')}
								/>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.infoContainer}>
						<View style={styles.infoNameContainer}>
							<Image 
								source={require('../../assets/images/memberIcon.png')}
								style={styles.memberIcon}
							/>
							<Text style={styles.nameText}>
								{'  '}ЭНДРЮ ГАРФИЛД
							</Text>
						</View>
						<View style={styles.personInfoContainer}>
							<Text style={styles.cityAge}>
								Челябинск, 32 годa
							</Text>
							<Text style={styles.job}>
								предприниматель
							</Text>
						</View>
					</View>
				</View>
				<View style={styles.otherInfoContainer}>
					<ScrollView>
						<InfoString
							left='Встреча:' 
							right='11:00  20.10.2015'
						/>
						<InfoString
							left='Результат' 
							right='ушел думать'
						/>
						<GreenContainer
							textInput='Назначить звонок'
						/>
						<GreenContainer
							textInput='Назначить повторную встречу'
						/>
						<InfoString
							left='ТЕЛЕФОН' 
							right='+7 900 700-70-70'
						/>
						<InfoString
							left='SKYPE' 
							right='Garfildaction'
						/>
						<InfoString
							left='VIBER' 
							right='+7 900 700-70-70'
						/>
						<InfoString
							left='WHATSAPP' 
							right='+7 900 700-70-70'
						/>
						<InfoString
							left='VKONTAKTE' 
							right='id34567'
						/>
						<InfoString
							left='FACEBOOK' 
							right='Ivanov-ivan'
						/>
					</ScrollView>
				</View>
			</View>
			);
	}
}


const styles = StyleSheet.create({
	container: {
		width: '100%',
	  height: '100%',
	},

	topContainer: {
		height: '40%',
		width: '100%',
		backgroundColor: 'rgba(0,177,248,0.5)',
    position: 'absolute',
    flexDirection: 'column',
	},

	underBackground: {
		width: '100%',
	  height: '40%',
	},

	header: {
		flex: 1,
		flexDirection: 'row',
	},

	burerIconContainer: {
		flex: 1,
		justifyContent: 'flex-end',
	},

	burerIcon: {
		marginLeft: '15%',
		width: 21,
    height: 14,
	},	

	centralTextContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
    opacity: 1,
	},

	centralText: {
		fontSize: 15,
    fontWeight: '400',
    color: '#ffffff',
    letterSpacing: 1.2,
	},

	textRightContainer: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		flexDirection: 'row',
	},

	textRight: {
		fontSize: 15,
    fontWeight: '400',
    color: '#ffffff',
    letterSpacing: 1.2,
	}, 

	arrow: {
		width: 20,
    height: 18,
    marginRight: '15%',
	},

	imagesContainer: {
		flex: 2,
		flexDirection: 'row',
	},

	messageContainer: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'center',
	},

	iconContainer: {
		borderRadius: 50,
		height: 50,
		width: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff',
	},

	icon: {
		width: 22,
		height: 22,
	},

	avatarContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: '5%',
		marginRight: '5%',
	},

	avatar: {
		width: 100,
    height: 100,
	},

	phoneContainer: {
		flex: 1,
		justifyContent: 'center',
	},

	infoContainer: {
		flex: 2,
	},

	infoNameContainer: {
		height: '50%',
		flexDirection: 'row',
	},

	memberIcon: {
		height: 16,
		width: 13,
		marginLeft: '26%',
	},

	nameText: {
		 letterSpacing: 0.24,
		 fontSize: 16,
     fontWeight: '400',
     color: '#ffffff',
	},

	personInfoContainer: {
		height: '50%',
		alignItems: 'center',
	},

  cityAge: {
  	fontSize: 11,
    fontWeight: '400',
    color: '#ffffff',
    letterSpacing: 0.9,
  },

  job: {
  	fontSize: 11,
    fontWeight: '400',
    color: '#ffffff',
    letterSpacing: 0.9,
  },
  	
});