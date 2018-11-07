import { SENDING_DATA, SUCCESS, ERROR, SET_CURRENT_USER } from '../actions/constants';


const initialStore = {
	user: {},
	isAuthenticated: false,
	fetchting: false
};

const authReducer = (state=initialStore, action) => {
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
			}
		case SET_CURRENT_USER:
			return{
				...state,
				user: action.payload,
				isAuthenticated: Objects.keys(action.payload).length !== 0
			}
		default:
			return state;
	}
} 

export default authReducer;
