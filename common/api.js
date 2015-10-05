require('isomorphic-fetch');

export default (url, options) => {
	Object.assign(options, {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
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