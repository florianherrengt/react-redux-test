import en from './en';
import fr from './fr';

const locales = { en, fr };

export default function (locale = 'en') {
	return locales[locale];
}
