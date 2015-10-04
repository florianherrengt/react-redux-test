import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../client/containers/App';
import About from '../client/containers/About';
import Counter from '../client/containers/Counter';
import Signin from '../client/containers/Signin';

// const routes = [ {
//     path: '/',
//     component: App
// }, {
//     path: '/about',
//     component: About
// } ];

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Counter} />
      	<Route path="about" component={About} />
      	<Route path="signin" component={Signin} />
    </Route>
);

export default routes;
