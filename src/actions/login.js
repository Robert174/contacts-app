import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { SENDING_DATA, SUCCESS, ERROR, SET_CURRENT_USER } from './constants';
import jwt_decode from 'jwt-decode';
import { AsyncStorage } from 'react-native';
import setAuthToken from '../setAuthToken';


export const sendingData = () => ({
	type: SENDING_DATA
});


export const successLogin = () => ({
	type: SUCCESS
});


export const errorLogin = errors => ({
	type: ERROR,
	payload: errors
});


export const setUser = user => ({
	type: SET_CURRENT_USER,
	payload: user
});

export default function login(payload){
	return dispatch => {
		dispatch(sendingData());
		axios
			.post('/api/users/login', payload)
			.then(res =>{
				dispatch(succesLogin());
				var token = res.headers[x-auth];
				AsyncStorage.setItem('jwt', token);
				setAuthToken(token);
				const decoded = jwt_decode(token);
				dispatch(setUser(decoded));
				Actions.main();
			})
			.catch(err => dispatch(errorLogin(err.response.data)))
	}
}
