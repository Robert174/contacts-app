import { ERROR } from '../actions/constants';


const initialStore = {};

const errorReducer = (state=initialStore, action) => {
	switch(action.type){
		case ERROR: 
			return action.payload;
		default:
			return state;
	}
}
export default errorReducer
