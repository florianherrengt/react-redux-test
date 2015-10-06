import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../../webpack.config';
const compiler = webpack(config);

import loopback from 'loopback';
import cookieParser from 'cookie-parser';
import locale from 'locale';
import React from 'react';
import { createLocation } from 'history';
import configureStore from '../../client/store/configureStore';
import { match, RoutingContext } from 'react-router';
import { Provider } from 'react-redux';
import routes from '../../common/routes';
import renderHtml from '../../client/index.html';

function root(server) {
    const router = server.loopback.Router();
    router.get('/check-server-status', server.loopback.status());
    // router.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }));
    server.use(cookieParser());
    server.use(locale([ 'fr', 'en' ]));
    server.use(loopback.token({ model: server.models.AccessToken, currentUserLiteral: 'me' }));
    console.log('server.models.Dump.Validate', server.models.Dumb.validations);
    server.use(router);

    server.use((request, response, next) => {
        console.log('request.locale', request.locale);
        console.log('request.cookies', request.cookies);
        const token = request.cookies.Authorization;
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
                fetchData({ token }).then((componentData) => {
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
                    const store = configureStore({
                        signin: token
                    });
                    store.dispatch(componentData);
                    console.log('store.getState() from server', store.getState());
                    const html = React.renderToString(
                        <Provider store={store}>
                            { () => <RoutingContext { ...renderProps } /> }
                        </Provider>
                    );
                    response.send(renderHtml(html, store.getState()));
                }).catch((error) => {
                    console.log(error);
                    return response.sendStatus(500);
                });
            } else {
                console.log('No renderProps found');
                return next();
            }
        });
    });
}

export default root;

