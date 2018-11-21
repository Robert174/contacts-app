import axios from 'axios';
import { SENDING_DATA, SUCCESS, STORE_MESSAGES } from './constants';

export const sendingData = () => ({
	type: SENDING_DATA
});

export const success = () => ({
	type: SUCCESS
});

export const storeMessages = msgs => ({
	type: STORE_MESSAGES,
	payload: msgs
});

export default function getMessages(){
	return dispatch => {
		dispatch(sendingData());
		axios
			.get('/api/chat')
			.then(res => {
				dispatch(success());
				dispatch(storeMessages(res.data));
			})
			.catch(err => alert(JSON.stringify(err)));
	}
}