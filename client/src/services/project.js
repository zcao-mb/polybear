import { config } from '../helpers/config';
import { handleResponse, handleError } from './responseHandlers';
export const projectServices = {
    list,
    detail,
    create
}

function list() {
    const url = `${config.apiRoot}/project/list`;
    
    return fetch(url).then(handleResponse, handleError);
}

function detail(id) {
    const url = `${config.apiRoot}/project/detail/${id}`;

    return fetch(url).then(handleResponse, handleError);
}

function create(param) {
    const url = `${config.apiRoot}/project/create`;
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(param)
      };

    return fetch(url, options).then(handleResponse, handleError);
}