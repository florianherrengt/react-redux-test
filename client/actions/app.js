export const FETCH_DATA_APP = 'FETCH_DATA_APP';

export function fetchData() {
  return new Promise((resolve) => {
    resolve({ type: 'FETCH_DATA_APP' });
  });
}