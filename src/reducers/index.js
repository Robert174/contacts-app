import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import chatReducer from './chatReducer';


export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	chat: chatReducer
});