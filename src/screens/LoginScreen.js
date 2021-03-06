import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo';
import { Actions } from 'react-native-router-flux';
import login from '../actions/login';
import { connect } from 'react-redux';

class Login extends Component {
	static navigationOptions = {
		header: null
	};

	state = {
		email: '',
		password: '',
		errors: {}
	}

	onEmailChange(text) {
		this.setState({ email: text});
	}

	onPasswordChange(text) {
		this.setState({ password: text});
	}

	handleRequest() {
		var{ email, password } = this.state;
		const payload = {email, password};

		this.props.login(payload);
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			})
		}
	}

	render() {
		var { errors } = this.state;
		return (
			<LinearGradient colors={['#00daad', '#00b1fa']} style={styles.linearGradient}>
				<View style={styles.iconContainer}>
					<Image
						style={styles.icon}
						source={require('../../assets/images/regIcon.png')}
					/>
					<Text style={styles.letter}>
						C
					</Text>
					<Text style={styles.appName}>
						contacts
					</Text>
				</View>
				
				<View style={styles.loginForm}>
					<View style={styles.numberContainer}>
						<TextInput 
							style={styles.number} 
							placeholder='Введите почту'
							onChangeText={this.onEmailChange.bind(this)}
							autoCapitalize='none'
							autoCorrect={false}
						/>
						{errors.email && <Text style={{color: 'red', fontSize: 10, position: 'absolute', top: 0, alignSelf: 'center'}}>{errors.email}</Text>}
					</View>
					<View stile={styles.line}>
					</View>
					<View style={styles.passwordContainer}>
						<TextInput 
							style={styles.password} 
							placeholder='Пароль'
							onChangeText={this.onPasswordChange.bind(this)}
							secureTextEntry 
							autoCapitalize='none'
							autoCorrect={false}
						/>
						{errors.password && <Text style={{color: 'red', fontSize: 10, position: 'absolute', top: 0, alignSelf: 'center'}}>{errors.password}</Text>}
					</View>
				</View>
				<TouchableOpacity 
					style={styles.entryContainer}
					onPress={this.handleRequest.bind(this)}
				>
					<Text style={styles.entry}>
						Войти
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.forgotContainer}
					onPress={() => {}}
				>
					<Text style={styles.forgot}>
						Забыли пароль?
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.registrationContainer}
					onPress={() => Actions.regscr()}
				>
					<Text style={styles.registration}>
						Зарегистрироваться
					</Text>
				</TouchableOpacity>
			</LinearGradient>
		)
	}
}

const styles = StyleSheet.create({
	linearGradient: {
		flex: 1,
		alignItems: 'center',
	},

	iconContainer: {
		marginTop: 100,
		alignItems: 'center',
		justifyContent: 'center',
	},

	line: {
		height: 211.5,
		backgroundColor: '#4e606e',
    opacity: 0.4,
    flex: 0.1
	},

	icon: {
		width: 80,
    height: 63,
	},

	letter: {
		fontSize: 30,
    fontWeight: '900',
    color: '#ffffff',
    position: 'absolute',
    top: 12,
	},

	appName: {
		marginTop: 30,
		fontSize: 55,
	    fontWeight: '900',
	    fontStyle: 'italic',
	    color: '#ffffff',
	    alignItems: 'center',
	    justifyContent: 'center',
	},

	loginForm: {
		marginTop: 90,
		backgroundColor: '#ffffff',
		height: 100,
		width: 280,
		borderColor: '#ffffff',
		borderStyle: 'solid',
		borderWidth: 1,
		borderRadius: 10,
	},

	numberContainer: {
		flex: 1,
		justifyContent: 'center',
	},

	number: {
		fontSize: 12,
	    fontWeight: '400',
	    color: '#333333',
	    letterSpacing: 0.9,
	    marginLeft: 20,
	},

	passwordContainer: {
		flex: 1,
		justifyContent: 'center',
		marginTop: '0.1%',
	},

	password: {
		fontSize: 12,
	    fontWeight: '400',
	    color: '#333333',
	    letterSpacing: 0.9,
	    marginLeft: 20,
	},

	entryContainer: {
		marginTop: 35,
		height: 35,
		width: 120,
		borderColor: '#304046',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent:'center',
	},

	entry: {
		color: '#333333',
		fontSize: 16,
    fontWeight: '700',
	},

	forgotContainer: {
		marginTop: 60,
		
		width: '30%',
		height: 15,
		alignItems: 'center',

	},

	forgot: {
		alignItems: 'center',
		color: '#333333',
		fontSize: 12,
    fontWeight: '400',
    textDecorationLine: 'underline',
	},

	registrationContainer: {
		marginTop: 20,
		
		width: '40%',
		height: 15,
		alignItems: 'center',
	},

	registration: {
		color: '#ffffff',
		fontSize: 12,
    fontWeight: '400',
    textDecorationLine: 'underline',
    alignItems: 'center',
	},
});

const mapStateToProps = state => ({
	errors: state.errors
});

const mapDispatchToProps = dispatch => ({
	login: user => {
		dispatch(login(user))
	}
});

const LoginScreen = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginScreen