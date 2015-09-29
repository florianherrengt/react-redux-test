import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';

export default function counter(state = 0, action) {
	console.log('action:counter');
  switch (action.type) {
  case INCREMENT_COUNTER:
    return state + 1;
  case DECREMENT_COUNTER:
    return state - 1;
  case 'FETCH_DATA_COUNTER':
  	return state;
  default:
    return state;
  }
}
