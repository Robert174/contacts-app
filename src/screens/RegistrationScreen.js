import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import InfoInput from '../components/InfoInput.js';
import GreenContainer from '../components/greenContainer.js';
import { connect } from 'react-redux';
import createNewUser from '../actions/signup';
import { Actions } from 'react-native-router-flux';


class Registration extends Component {
	static navigationOptions = {
		header: null
	};

	state = {
		name: '',
		email: '',
		password: '',
		password_confirm: '',
		errors: {}
	}

	onNameChange(text) {
		this.setState({ name: text });
	}

	onEmailChange(text) {
		this.setState({ email: text });
	}

	onPasswordChange(text) {
		this.setState({ password: text });
	}

	onPasswordConfirmChange(text) {
		this.setState({ password_confirm: text });
	}

	handleRequest() {
		var { name, email, password, password_confirm } = this.state;
		const payload = {name, email, password, password_confirm};

		this.props.createNewUser(payload);
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
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity 
						style={styles.iconContainer}
						onPress={Actions.logscr}
					>
						<Image
							style={styles.icon}
							source={require('../../assets/images/leftArrowIcon.png')}
						/>
					</TouchableOpacity>
					<Text style={styles.headText}>
						Регистрация
					</Text>
				</View>
				<InfoInput 
					left= 'ИМЯ'
					callback={this.onNameChange.bind(this)}
				/>
				{errors.name && <Text style={{color: 'red'}}>{errors.name}</Text>}

				<InfoInput 
					left= 'EMAIL'
					callback={this.onEmailChange.bind(this)}
				/>
				{errors.email && <Text style={{color: 'red'}}>{errors.email}</Text>}

				<InfoInput 
					left= 'ПАРОЛЬ'
					callback={this.onPasswordChange.bind(this)}
					secure
				/>
				{errors.password && <Text style={{color: 'red'}}>{errors.password}</Text>}
				
				<InfoInput 
					left= 'ПАРОЛЬ'
					callback={this.onPasswordConfirmChange.bind(this)}
					secure
				/>
				{errors.password_confirm && <Text style={{color: 'red'}}>{errors.password_confirm}</Text>}

				<GreenContainer
					textInput= 'Зарегистрироваться'
					callback={this.handleRequest.bind(this)}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1,
	},

	header: {
		height: 100,
		flexDirection: 'row',
		backgroundColor: '#00b2f7',
	},

	iconContainer: {
		width: '10%',
		marginTop: 55,
		marginLeft: 20,

	},

	icon: {
		width: 20,
    	height: 18,
	},

	headText: {
		marginTop: 51,
		marginLeft: 52,
		alignItems: 'center',
		fontSize: 24,
    	fontWeight: '400',
    	color: '#ffffff',
    	letterSpacing: 1.2,
	},
});


const mapStateToProps = state => ({
	errors: state.errors
});

const mapDispatchToProps = dispatch => ({
	createNewUser: user => {
		dispatch(createNewUser(user))
	}
});

const RegistrationScreen = connect(mapStateToProps, mapDispatchToProps)(Registration);
export default RegistrationScreen;


 