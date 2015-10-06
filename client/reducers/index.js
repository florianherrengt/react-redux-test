import { combineReducers } from 'redux';
import counter from './counter';
import about from './about';
import signin from './signin';

const rootReducer = combineReducers({
  counter,
  about,
  signin
});

export default rootReducer;
