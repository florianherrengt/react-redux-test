import locales from '../../common/locales';
const defaultLocale = (typeof navigator !== 'undefined') ? navigator.language : 'en';
export default function data(state = null, action) {
	switch (action.type) {
  	case 'SET_LANG':
  		return locales(action.lang || defaultLocale);
  	default:
  		return state;
  	}
}
