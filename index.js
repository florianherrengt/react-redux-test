import React from 'react';
import { Router, Route } from 'react-router'
import { Provider } from 'react-redux';
import App from './containers/App';
import About from './containers/About';
import configureStore from './store/configureStore';
import { createHistory } from 'history'; // you need to install this package
let history = createHistory();

const initialState = window.__INITIAL_STATE__;

const store = configureStore(initialState);

const routeConfig = [ {
    path: '/',
    component: App
}, {
    path: '/about',
    component: About
} ];

React.render(
  <Provider store={store}>
    {() => <Router history={ history } routes={routeConfig}></Router>}
  </Provider>,
  document.getElementById('root')
);
