import { FETCH_DATA_SIGNIN, DO_SIGNIN_SUCCESS } from '../actions/signin';
import { fromJS } from 'immutable';

export default function data(state = null, action) {
	const { type, data } = action;
	switch (type) {
		case FETCH_DATA_SIGNIN:
			return data;
        case DO_SIGNIN_SUCCESS:
            return data;
		default:
			return state;
	}
}
