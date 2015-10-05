import request from 'superagent';
import { appUrl } from '../../common/config';
import api from '../../common/api';

export const SHOW_SOMETHING = 'SHOW_SOMETHING';

export function showSomething() {
  return (dispatch, getState, store) => {
      console.log('load data client side', getState());
      if (getState().about === null) {
        fetchData().then((responseData) => {
          console.log('fetched from client side');
          dispatch(responseData);
        });
      }
  };
}

export function fetchData({ token } = {}) {
  console.log('fetchData called');
  // console.log(`${appUrl}/api/dumbs`);
  return api(`${appUrl}/api/Users/me`, { token })
    .then((data) => {
      console.log('fetch data', data);
      if (data.error) {
        return { data };
      }
      return {
          type: 'FETCH_DATA_ABOUT',
          data: [ { title: data.email } ]
      };
    });
}
