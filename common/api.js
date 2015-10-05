require('isomorphic-fetch');
import docCookies from '../client/utils/docCookies';

export default (url, options = {}) => {
    const token = (typeof window === 'undefined') ? options.token : docCookies.getItem('Authorization');
    Object.assign(options, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        }
    });
    console.log('API call:', url, options);
    return fetch(url, options)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            if (typeof window !== 'undefined') {
                if (data.error) {
                    if (data.error.status === 401) {
                        return window.location = '/';
                    }
                }
            }
            return data;
        });
};
