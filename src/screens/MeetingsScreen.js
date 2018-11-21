import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header.js';
import Search from '../components/Search.js';
import Footer from '../components/Footer.js';
import MeetingPreview from '../components/MeetingPreview.js';
import { Actions } from 'react-native-router-flux';


export default class MeetingsScreen extends Component {
	static navigationOptions = {
		header: null
	};

	render() {
		let number = 110;

		return (
			<View style={styles.container}>
				<Header 
					textCenter='Встречи'
					textRight='Назначить'
					icon={require('../../assets/images/burerIcon.png')}
					nav={Actions.mkmeetscr}
				/>

				<Search />

				<TouchableOpacity 
					style={styles.settingsContainer}
					onPress={() => {}}
				>
					<Image 
						source={require('../../assets/images/addButton.png')}
						style={styles.addButton}
					/>
					<Text style={styles.blueText}>
						{'  '}Расширенные настройки поиска
					</Text>
				</TouchableOpacity> 

				<View style={styles.line}>
				</View>

				<View style={styles.scrollContainer}>
					<ScrollView>
						<MeetingPreview 
							number={number++}
							initials='Эндрю Гарфилд'
							city='Челябинск'
							age='23'
							workPlace='на себя'
							purpose=''
							time='12:00'
							date='20.10.2015' 
							avatar={require('../../assets/images/avatar1.png')}
							color={number % 2 ? '#ffffff' : '#eeeeee'}
						/>
						<MeetingPreview
							number={number++}
							initials='Эндрю Гарфилд'
							city='Челябинск'
							age='23'
							workPlace='в MLM'
							purpose='За деньгами'
							time='12:00'
							date='20.10.2015' 
							avatar={require('../../assets/images/avatar2.png')}
							color={number % 2 ? '#ffffff' : '#eeeeee'}
						/>
						<MeetingPreview
							number={number++}
							initials='Эндрю Гарфилд'
							city='Челябинск'
							age='23'
							workPlace='по найму'
							purpose=''
							time='12:00'
							date='20.10.2015' 
							avatar={require('../../assets/images/avatar3.png')}
							color={number % 2 ? '#ffffff' : '#eeeeee'}
						/>
					</ScrollView>
				</View>

				<View style={styles.line}>
				</View>

				<Footer 
					textLeft='Выйти'
					textRight='Чат'
					nav={Actions.chtscr}
				/>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
		backgroundColor: '#fff',
	},

	settingsContainer: {
		height: 50,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},

	addButton: {
		width: 22,
		height: 22,
	},

	blueText: {
		fontSize: 15,
    fontWeight: '400',
    color: '#00b2f7',
    letterSpacing: 1.2,
	},

	line: {
		width: '90%',
		height: 0.5,
		backgroundColor: '#4e606e',
    opacity: 0.4,
	},

	scrollContainer: {
		height: 370,
		width: '100%',
	},
});