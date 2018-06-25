
export function handleResponse(response) {
    return new Promise((resolve, reject) => {
        console.log('response handler: ', response);
        if (response.ok) {
            // return json if it was returned in the response
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                response.json().then(json => resolve(json));
            } else {
                resolve();
            }
        } else {
            if(response.status === 404) {
                reject({type: 'http', code: response.status, message: 'not found'});
            }
            else {
                // return error message from response body
                response.text().then(text => reject(text));
            }
        }
    });
}

export function handleError(error) {
    console.log('error handler: ', error);
    return Promise.reject(error && error.message);
}