import api from '../../common/api';
import { appUrl } from '../../common/config';

export const FETCH_DATA_SIGNIN = 'FETCH_DATA_SIGNIN';
export const DO_SIGNIN = 'DO_SIGNIN';
export const DO_SIGNUP = 'DO_SIGNUP';

export function fetchData() {
  return new Promise((resolve) => {
    resolve({ type: 'FETCH_DATA_SIGNIN' });
  });
}

export function doSignup(payload) {
	console.log(payload);
	return api(`${appUrl}/api/Users`, {
		method: 'POST',
		body: JSON.stringify(payload)
	})
    .then((data) => {
    	console.log(data)
    	doSignin(payload);
		return {
			type: DO_SIGNUP,
			data
		};
    });
}

export function doSignin(payload) {
	console.log(payload);
	return api(`${appUrl}/api/Users/login`, {
		method: 'POST',
		body: JSON.stringify(payload)
	})
    .then((data) => {
    	console.log(data)
		return {
			type: DO_SIGNIN,
			data
		};
    });
}