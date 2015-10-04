import { FETCH_DATA_APP } from '../actions/app';
import { fromJS } from 'immutable';

export default function data(state = null, action) {
	const { type, data } = action;
	switch (type) {
		case FETCH_DATA_APP:
			console.log('reducer:app');
			return data;
		default:
			return state;
	}
}
