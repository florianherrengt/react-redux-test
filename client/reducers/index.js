import { combineReducers } from 'redux';
import counter from './counter';
import about from './about';
import signin from './signin';
import locales from './locales';

const rootReducer = combineReducers({
  counter,
  about,
  signin,
  locales
});

export default rootReducer;
