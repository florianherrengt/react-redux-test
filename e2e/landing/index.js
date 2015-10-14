import webdriverio from 'webdriverio';

import { appUrl } from '../../common/config';
import { hero } from '../landing/page';

const options = { desiredCapabilities: { browserName: 'chrome' } };
const client = webdriverio.remote(options);

describe('React-redux-test', function runTest() {
	this.timeout(10000);
	before((done) => {
		client
	    .init()
	    .url(appUrl + '/')
	    .call(done);
	});
	after((done) => {
		client.end().call(done);
	})
	it('should signup, signin and redirect to the home page', done => {
		client
			.waitForVisible('#hero', 5000)
			.call(done);
	});
});