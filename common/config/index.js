import dev from './dev';
const env = process.env.ENV || 'dev';

const config = {
	dev
};

export default config[env];