import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from './webpack.config';
const express = require('express');
const app = express();
const compiler = webpack(config);
const port = 3000;

app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }));

import { createLocation } from 'history';
import configureStore from './store/configureStore';
import { match } from 'react-router';
import { Provider } from 'react-redux';
import routes from './common/routes';

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
    const location = createLocation(req.url);
    match({ routes, location }, (error, redirectLocation, renderProps) => {
        if (error) { throw new Error(error); }
        if (renderProps) {
            const Component = renderProps.routes[ 0 ].component;
            let fetchData = renderProps.components[ 0 ].WrappedComponent.fetchData;
            if (!fetchData) {
                fetchData = () => { return new Promise((resolve) => { resolve(); }); };
            }
            fetchData().then((componentData) => {
                const store = configureStore(componentData);
                const html = React.renderToString(
                    <Provider store={store}>
                        { () => <Component /> }
                    </Provider>
                );
                res.send(renderHtml(html, store.getState()));
            });
        } else { return next(); }
    });
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
