import axios from 'axios';
import { Actions } from 'react-native-router-flux';

import { SENDING_DATA, SUCCESS, ERROR } from './constants';


export const sendingData = () => ({
	type: SENDING_DATA
});

export const userCreated = () => ({
	type: SUCCESS
});

export const invalidCreation = errors => ({
	type: ERROR,
	payload: errors
});

export default function createNewUser(payload) {
	return dispatch => {

		dispatch(sendingData());

		axios
			.post('/api/users/register', payload)
			.then(res => {
				dispatch(userCreated());
				Actions.auth();
			})
			.catch(err =>{
				dispatch(invalidCreation(err.response.data))
			});	
	};
}