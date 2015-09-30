require('isomorphic-fetch');

export default (url, options) => {
	return fetch(url, options)
		.then(function(response) {
	        if (response.status >= 400) {
	            throw new Error("Bad response from server");
	        }
	        throw {
	        	a: 1
	        }
	        // if (typeof window === 'object')
	        // 	window.location = '/';
	        // else
	        return response.json();
	    }).catch(function(error) {
		    console.log('request failed', error)
		});
};