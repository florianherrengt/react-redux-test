import webdriverio from 'webdriverio';

import { appUrl } from '../../common/config';
import { pageUrl, inputs } from './page';
const { email, password, submit } = inputs;
import { hero } from '../landing/page';

const options = { desiredCapabilities: { browserName: 'chrome' } };
const client = webdriverio.remote(options);

describe('React-redux-test', function runTest() {
	this.timeout(10000);
	before((done) => {
		client
	    .init()
	    .url(appUrl + '/signin')
	    .call(done);
	});
	after((done) => {
		client.end().call(done);
	})
	it('should signup, signin and redirect to the home page', done => {
		client
			.setValue(email, 'florian@herrengt.fr')
			.setValue(password, 'somepassword')
			.click(submit)
			.waitForVisible(hero, 5000)
			.call(done);
	});
});
