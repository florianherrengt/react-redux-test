import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../../webpack.config';
const compiler = webpack(config);

import React from 'react';
import { createLocation } from 'history';
import configureStore from '../../client/store/configureStore';
import { match, RoutingContext } from 'react-router';
import { Provider } from 'react-redux';
import routes from '../../common/routes';

function renderHtml(html, initialState) {
    return `<!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
        <title>Redux counter example</title>
      </head>
      <body>
        <div id="root">
            ${html}
        </div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script src="/client/dist/bundle.js"></script>
      </body>
    </html>`;
}

function root(server) {
    const router = server.loopback.Router();
    router.get('/check-server-status', server.loopback.status());

    router.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }));

    server.use(router);

    server.use((request, response, next) => {
        console.log('request.body', request.body);
        const location = createLocation(request.url);
        match({ routes, location }, (error, redirectLocation, renderProps) => {
            if (error) { throw new Error(error); }
            if (renderProps) {
                const Component = renderProps.routes[ 0 ].component;
                let fetchData = renderProps.components[ 1 ].WrappedComponent.fetchData;
                if (!fetchData) {
                    fetchData = () => { return new Promise((resolve) => { resolve([]); }); };
                }
                fetchData().then((componentData) => {
                    console.log('componentData', componentData);
                    if(componentData.data && componentData.data.error) {
                        console.log('componentData.data.error', componentData.data.error);
                        if (componentData.data.error.status === 401) {
                            response.redirect('/');
                        }
                        return response
                            .status(componentData.error.status)
                            .json(componentData.error);
                    }
                    const store = configureStore();
                    store.dispatch(componentData);
                    console.log('store.getState() from server', store.getState());
                    const html = React.renderToString(
                        <Provider store={store}>
                            { () => <RoutingContext { ...renderProps } /> }
                        </Provider>
                    );
                    response.send(renderHtml(html, store.getState()));
                }).catch((error) => {
                    return response.sendStatus(501);
                });
            } else { 
                console.log('No renderProps found');
                return next(); 
            }
        });
    });
}

export default root;

