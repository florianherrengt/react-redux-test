import webdriverio from 'webdriverio';

import { appUrl } from '../../common/config';
import { pageUrl, inputs } from './page';
const { email, password, submit } = inputs;
import { hero } from '../landing/page';

const options = { desiredCapabilities: { browserName: 'chrome' } };
const client = webdriverio.remote(options);

client
    .init()
    .url(appUrl + pageUrl)
    .setValue(email, 'florian@herrengt.fr')
    .setValue(password, 'somepassword')
    .click(submit)
    .waitForVisible(hero, 5000)
    .end();