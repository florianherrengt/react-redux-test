import locales from '../../common/locales';
const defaultLocale = (typeof navigator !== 'undefined') ? navigator.languages[ 0 ].substr(0, 2) : 'en';
export default function data(state = null, action) {
	switch (action.type) {
  	case 'SET_LANG':
        console.log('SET_LANG:', locales(action.lang || defaultLocale));
  		return locales(action.lang || defaultLocale);
  	default:
        // console.log('DEFAULT_LOCALE:', locales(defaultLocale));
  		return locales(defaultLocale);
  	}
}
