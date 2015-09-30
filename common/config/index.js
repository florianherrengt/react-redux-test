import dev from './dev';
import heroku from './heroku';

const env = process.env.ENV || 'dev';

const config = { dev, heroku };

export default config[env];