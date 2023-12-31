export const fetchWrapper = {
    get,
    post,
    put
};

function get(url, headers) {
    const requestOptions = {
        method: 'GET',
        headers: headers
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function post(url, body, headers) {
    const requestOptions = {
        method: 'POST',
        headers: { ...headers, 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function put(url, body, headers) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...headers, 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse);    
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        
        if (!response.ok) {
            const error = data;
            return Promise.reject(error);
        }

        return data;
    });
}