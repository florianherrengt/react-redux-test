// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
// var config = require('./webpack.config');
// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//       res.send('Hello World!');
// });

// var server = app.listen(3000, function () {
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log('Example app listening at http://%s:%s', host, port);
// });

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var app = new require('express')();
var port = 3000;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));


import { createLocation } from 'history';
import configureStore from './store/configureStore';
import { RoutingContext, match } from 'react-router';
import { Provider } from 'react-redux';

import App from './containers/App';
import About from './containers/About';
const routes = [ {
    path: '/',
    component: App
}, {
    path: '/about',
    component: About
}, {
    path: '/about/:user',
    component: About
} ];

import React from 'react';

function renderHtml(html, initialState) {
    return `<!DOCTYPE html>
    <html>
      <head>
        <title>Redux counter example</title>
      </head>
      <body>
        <div id="root">
            ${html}
        </div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>`;
}

app.use((req, res, next) => {
    const props = {
        about: [ {
            title: 'hello'
        }, {
            title: 'world'
        } ]
    };
    // return res.send(React.renderToString(<About { ...props } />));
    // next();
    const location = createLocation(req.url);
    match({ routes, location }, (error, redirectLocation, renderProps) => {
        // console.log(renderProps.components[ 0 ].WrappedComponent.fetchData);
        // renderProps.components[ 0 ].WrappedComponent.fetchData().then(() => {
            // console.log(renderProps.routes[ 0 ].component);
            if (renderProps) {
                console.log(renderProps);
                const Component = renderProps.routes[ 0 ].component;
                // console.log(renderProps.routes[ 0 ].path);
                let { fetchData } = require(__dirname + '/actions' + renderProps.routes[ 0 ].path);
                if (!fetchData) {
                    fetchData = () => { return new Promise((resolve) => { resolve() }); };
                }
                // return console.log(fetchData);
                // const fetchData = Component.WrappedComponent.fetchData || () => { return new Promise((resolve) => { resolve() }); };
                fetchData().then((componentData) => {
                    const store = configureStore(componentData);
                    // console.log(store.getState());
                    // Object.assign(renderProps.params, props);
                    // console.log(renderProps);
                    const html = React.renderToString(
                        <Provider store={store}>
                            { () => <Component /> }
                        </Provider>
                    );
                    res.send(renderHtml(html, store.getState()));
                });
            } else { next(); }
        // });
    });
    // next();
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
