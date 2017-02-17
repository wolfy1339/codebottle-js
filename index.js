const fetch = require('isomorphic-fetch');
const queryString = require("querystring");
const helpers = require('./helpers.js');

const apiUrl = "https://codebottle.io/api/v1";

function search(keywords, opts) {
    return fetch(apiUrl + "/search.php?" + queryString.stringify(Object.assign({
        keywords
    }, opts)))
        .then(helpers.handleResponse)
        .then(json => json.results);
}

function get(id, opts) {
    return fetch(apiUrl + "/get.php?" + queryString.stringify(Object.assign({
        id
    }, opts)))
        .then(helpers.handleResponse)
        .then(json => json.data);
}

function browse(limit, opts) {
    return fetch(apiUrl + "/browse.php?" + queryString.stringify(Object.assign({
        limit
    }, opts)))
        .then(helpers.handleResponse)
        .then(json => json.results);
}

function verifySecure(token, opts) {
    fetch(apiUrl + "/verifysecure.php?" + queryString.stringify(Object.assign({
        secure_token: token
    }, opts)))
        .then(helpers.handleResponse)
        .then(json => json.username);
}

function getProfile(username, opts) {
    fetch(apiUrl + "/getprofile.php?" + queryString.stringify(Object.assign({
        username
    }, opts)))
        .then(helpers.handleResponse)
        .then(json => json.profile);
}

module.exports = {
    search,
    get,
    browse,
    verifySecure,
    getProfile
};
