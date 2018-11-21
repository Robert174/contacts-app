import { SENDING_DATA, SUCCESS, SAVE_MESSAGE, STORE_MESSAGES } from '../actions/constants';


const initialStore = {
	messages: [],
	fetchting: false
};

const chatReducer = (state=initialStore, action) => {
	switch (action.type) {
		case SENDING_DATA:
			return {
				...state,
				fetching: true
			};
		case SUCCESS:
			return {
				...state,
				fetching: false
			};
		case SAVE_MESSAGE:
			return {
				...state,
				messages: state.messages.concat([action.payload])
			};
		case STORE_MESSAGES:
			return {
				...state,
				messages: action.payload
			};
		default:
			return state;
	}
}

export default chatReducer;