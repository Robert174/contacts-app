import axios from 'axios';
import { SENDING_DATA, SUCCESS, SAVE_MESSAGE } from './constants';

export const sendingData = () => ({
	type: SENDING_DATA
});

export const success = () => ({
	type: SUCCESS
});

export const saveMessage = msg => ({
	type: SAVE_MESSAGE,
	payload: msg
});

export default function sendMessage(payload){
	return dispatch => {
		dispatch(sendingData());
		axios
			.post('/api/chat', payload)
			.then(res => {
				dispatch(success());
				dispatch(saveMessage(res.data));
			})
			.catch(err => alert(JSON.stringify(err)));
	}
}