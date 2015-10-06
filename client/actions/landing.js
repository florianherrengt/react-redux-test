export function fetchData() {
    return new Promise((resolve) => {
        resolve({ type: 'FETCH_DATA_LANDING' });
    });
}
