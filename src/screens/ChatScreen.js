import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, ScrollView, Image, TextInput } from 'react-native';
import SocketIOClient from 'socket.io-client';

import sendMessage from '../actions/sendMessage';
import getMessages from '../actions/getAllMessages';
import { connect } from 'react-redux';

class Chat extends Component {
	static navigationOptions = {
		title: 'Chat'
	};

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			text: '',
		};

		this.socket = SocketIOClient('http://172.20.10.4:5000');

		this.socket.on('message', msg => {
			this.props.getMessages();
		});
	}


	componentWillMount() {
		this.props.getMessages();
	}

	componentWillReceiveProps(nextProps){
		if (nextProps.auth.user){
			this.setState({
				username: nextProps.auth.user.name
			})
		}
	}


	onSend(){
		if (this.state.text){
			this.socket.emit('message', this.state.text);
			this.setState({text: ''});
			this.props.sendMessage({
				from: this.state.username,
				text: this.state.text
			})
		}
	}

	render() {
		return(
			<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
				<ScrollView style={styles.top}>
					{
						this.props.chat.messages.map((msg, index) => {
							return(
								<View key={index} style={this.state.username === msg.from ? styles.myMessage : styles.incomeMessage}>
									<Text key={index} style={styles.msgText}>
										{msg.text}
									</Text>
									{this.state.username !== msg.from && <Text key={index + 1} style={styles.author}>Автор: {msg.from}</Text>}>
								</View>
							);
						})
					}
				</ScrollView>
				<View style={styles.input}>
					<TextInput style={styles.writeMessage}
						placeholder='Введите сообщение'
						onChangeText={text => this.setState({text: text.trim()})}
						value={this.state.text}
					/>
					<TouchableOpacity style={styles.button} onPress={this.onSend.bind(this)}>
						<Image 
							source={require('../../assets/images/rightArrowIcon.png')}
							style={styles.icon}
						/>
					</TouchableOpacity>
					
				</View>
			</KeyboardAvoidingView>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},

	top: {
		width: '100%',
		height: '90%',
	},

	myMessage: {
		alignSelf: 'flex-end',
		justifyContent: 'center',
		marginTop: 5,
		marginRight: 5,
		marginLeft: 5,
		borderRadius: 10,
		backgroundColor: '#00b2f7',
	},

	incomeMessage: {
		alignSelf: 'flex-start',
		justifyContent: 'center',
		marginTop: 5,
		marginRight: 5,
		marginLeft: 5,
		borderRadius: 10,
		backgroundColor: '#00d9ad',
	},

	msgText: {
		fontSize: 15,
		fontWeight: '400',
		color: '#fff',
		letterSpacing: 1.2,
		marginBottom: 5,
		marginLeft: 10,
		marginRight: 10,
		marginTop: 5,
	},

	author: {
		fontSize: 12,
		fontWeight: '400',
		color: '#fff',
		letterSpacing: 1.2,
		marginBottom: 5,
		marginLeft: 10,
		marginRight: 10,
	},

	input: {
		height: '10%',
		width: '100%',
		flexDirection: 'row',
	},

	writeMessage: {
		flex: 4,
		marginLeft: 5,
	},

	button: {
		flex: 1,
		backgroundColor: '#00b2f7',
		alignItems: 'center',
		justifyContent: 'center',
	},

	icon: {
		width: 21,
		height: 14,
	},

});

const mapStateToProps = state => ({
	auth: state.auth,
	chat: state.chat
});

const mapDispatchToProps = dispatch => ({
	sendMessage: message => {
		dispatch(sendMessage(message))
	},
	getMessages: () => {
		dispatch(getMessages())
	}
});

const ChatScreen = connect(mapStateToProps, mapDispatchToProps)(Chat);
export default ChatScreen;