import { SHOW_SOMETHING } from '../actions/about';
import { fromJS } from 'immutable';

export default function data(state = null, action) {
	const { type, data } = action;
	switch (type) {
		case SHOW_SOMETHING:
			console.log('reducer:about:SHOW_SOMETHING');
			return data;
		case 'FETCH_DATA_ABOUT':
			console.log('reducer:about:FETCH_DATA_ABOUT', { data });
			return fromJS(data);
		default:
			return state;
	}
}
