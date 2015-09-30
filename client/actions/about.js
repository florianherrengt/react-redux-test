import request from 'superagent';
import { appUrl } from '../../common/config';

export const SHOW_SOMETHING = 'SHOW_SOMETHING';

export function showSomething() {
  return (dispatch, getState, store) => {
      console.log('load data client side', getState());
      if (getState().about === null) {
        fetchData().then(({ data }) => {
          console.log('fetched from client side');
          console.log({data});
          data.push({ title: 'from redux client side'});
          dispatch({
            type: 'FETCH_DATA_ABOUT',
            data
          });
        });
      }
  };
}

export function fetchData() {
  console.log('fetchData called');
  console.log(`${appUrl}/api/dumbs`);
  return new Promise((resolve) => {
    request
        .get(`${appUrl}/api/dumbs`)
        .end((error, response) => {
            resolve({
                type: 'FETCH_DATA_ABOUT',
                data: response.body
            });
        });
  });
}
