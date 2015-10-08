import api from '../../common/api';
import { appUrl } from '../../common/config';
import docCookies from '../utils/docCookies';

export const FETCH_DATA_SIGNIN = 'FETCH_DATA_SIGNIN';
export const DO_SIGNIN = 'DO_SIGNIN';
export const DO_SIGNUP = 'DO_SIGNUP';
export const DO_SIGNUP_SUCCESS = 'DO_SIGNUP_SUCCESS';
export const DO_SIGNUP_FAILURE = 'DO_SIGNUP_FAILURE';
export const DO_SIGNIN_SUCCESS = 'DO_SIGNIN_SUCCESS';
export const DO_SIGNIN_FAILURE = 'DO_SIGNIN_FAILURE';

export function fetchData() {
    return new Promise((resolve) => {
        resolve({ type: 'FETCH_DATA_SIGNIN' });
    });
}

export function doSigninSuccess({ data, history }) {
    console.log('doSigninSuccess');
    console.log('Set cookie', 'Authorization=' + data.id);
    docCookies.setItem('Authorization', data.id);
    history.pushState('/');
    return {
        type: DO_SIGNIN_SUCCESS,
        data
    };
}

export function doSigninFailure() {
    console.log('doSigninFailure');
    return {
        type: DO_SIGNUP_FAILURE
    };
}

export function doSignin({ payload, history }) {
    console.log('doSignin');
    console.log(payload);
    return dispatch => {
        api(`${appUrl}/api/Users/login`, {
            method: 'POST',
            body: JSON.stringify(payload)
        })
        .then((data) => {
            if (data.error) {
                return dispatch(doSigninFailure({ payload }));
            }
            dispatch(doSigninSuccess({ data, history }));
        });
    };
}

export function doSignupSuccess({ payload, history }) {
    console.log('doSignupSuccess');
    return doSignin({ payload, history });
}

export function doSignupFailure({ payload }) {
    console.log('doSignupFailure');
    return {
        type: DO_SIGNUP_FAILURE,
        payload
    };
}

export function doSignup({ payload, history }) {
    console.log('doSignup');
    console.log(payload);
    return dispatch => {
        api(`${appUrl}/api/Users`, {
            method: 'POST',
            body: JSON.stringify(payload)
        })
        .then((data) => {
            if (data.error) {
                return dispatch(doSignupFailure());
            }
            dispatch(doSignupSuccess({ payload, history }));
        });
    };
}

