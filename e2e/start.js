import { appUrl } from '../common/config';
import webdriverio from 'webdriverio';
const options = { desiredCapabilities: { browserName: 'chrome' } };
const client = webdriverio.remote(options);

client
    .init()
    .url(appUrl + '/signin')
    .setValue('input[name=email]', 'florian@herrengt.fr')
    .setValue('input[name=password]', 'somepassword')
    .click('input[type=submit]')
    .waitForVisible('#hero', 5000)
    .end();