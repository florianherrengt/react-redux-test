import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../../webpack.config';
const compiler = webpack(config);

import React from 'react';
import { createLocation } from 'history';
import configureStore from '../../client/store/configureStore';
import { match } from 'react-router';
import { Provider } from 'react-redux';
import routes from '../../common/routes';

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

function root(server) {
    const router = server.loopback.Router();
    router.get('/check-server-status', server.loopback.status());

    router.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }));

    server.use(router);

    server.use((request, response, next) => {
        const location = createLocation(request.url);
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
                    response.send(renderHtml(html, store.getState()));
                });
            } else { return next(); }
        });
    });
}

export default root;

