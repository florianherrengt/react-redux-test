export const SHOW_SOMETHING = 'SHOW_SOMETHING';

export function showSomething() {
  return (dispatch, getState, store) => {
      console.log('load data client side');
      fetchData().then((data) => {
        console.log('fetched');
        console.log(data);
        data.about.push({ title: 'from redux client side'});
        dispatch({
          type: SHOW_SOMETHING,
          data: data.about
        });
      });
  };
}

export function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve({
          about: [ {
                title: 'hello'
            }, {
                title: 'world'
            } ]
        });
      }, 1000);
  });
}
