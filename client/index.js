import React from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import routes from '../common/routes';
import configureStore from './store/configureStore';
import { createHistory } from 'history';
import { fromJS } from 'immutable';

let history = createHistory();

const initialState = window.__INITIAL_STATE__;
Object.keys(initialState).forEach(function (key) {
  	initialState[key] = fromJS(initialState[key]);
 	 // do something with obj
});
const store = configureStore(initialState);
console.log({initialState});
React.render(
  <Provider store={store}>
    {() => <Router history={ history } routes={routes}></Router>}
  </Provider>,
  document.getElementById('root')
);
