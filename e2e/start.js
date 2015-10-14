import { appUrl } from '../common/config';
import webdriverio from 'webdriverio';
const options = { desiredCapabilities: { browserName: 'chrome' } };
const client = webdriverio.remote(options);

require('./signin');
require('./landing');