import React from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import routes from './common/routes';
import configureStore from './store/configureStore';
import { createHistory } from 'history'; // you need to install this package
let history = createHistory();

const initialState = window.__INITIAL_STATE__;

const store = configureStore(initialState);

React.render(
  <Provider store={store}>
    {() => <Router history={ history } routes={routes}></Router>}
  </Provider>,
  document.getElementById('root')
);
