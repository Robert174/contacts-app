import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { SENDING_DATA, SUCCESS, SET_CURRENT_USER } from './constants';
import { AsyncStorage } from 'react-native';
import setAuthToken from '../setAuthToken';

export const loggingOut = () => ({
	type: SENDING_DATA
});

export const successLogout = () => ({
	type: SUCCESS
});

export const setUser = user => ({
	type: SET_CURRENT_USER,
	payload: user
});

export default function logout() {
	return dispatch => {
		dispatch(loggingOut());
		AsyncStorage.removeItem('jwt');
		setAuthToken(false);
		dispatch(setUser({}));
		dispatch(successLogout());
		Actions.auth();
	}
}