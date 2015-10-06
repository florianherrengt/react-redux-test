import { FETCH_DATA_APP } from '../actions/app';
import { DO_SIGNIN_SUCCESS } from '../actions/signin';
import { fromJS } from 'immutable';

export default function data(state = null, action) {
	const { type, data } = action;
	switch (type) {
		case FETCH_DATA_APP:
			console.log('reducer:app');
			return data;
		case DO_SIGNIN_SUCCESS:
			console.log('DO_SIGNIN_SUCCESS from app');
			return data;
		default:
			return state;
	}
}
