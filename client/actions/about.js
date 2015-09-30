import request from 'superagent';
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

export function fetchData() {
  console.log('fetchData called');
  return new Promise((resolve) => {
    request
        .get('http://localhost:3000/api/dumbs')
        .end((error, response) => {
            resolve({
                type: 'FETCH_DATA_ABOUT',
                data: response.body
            });
        });
  });
}
