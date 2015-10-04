export const FETCH_DATA_SIGNIN = 'FETCH_DATA_SIGNIN';

export function fetchData() {
  return new Promise((resolve) => {
    resolve({ type: 'FETCH_DATA_SIGNIN' });
  });
}