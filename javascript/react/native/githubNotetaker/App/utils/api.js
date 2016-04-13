'use strict';

let co = require('co');
let Config = require('./config');
let BaseUrl = Config.Const.BaseUrl;

function toValidString(str) {
  return str.toLowerCase().trim();
}

function get(url) {
  return co(function *() {
    return fetch(url, {method: 'GET'}).then(res => res.json());
  });
}

function post(url, obj) {
  return co(function *() {
    return fetch(url, {method: 'POST', body: JSON.stringify(obj)}).then(res => res.json());
  });
}

let api = {
  getBio(username){
    return get(`${BaseUrl.Github}/${toValidString(username)}`);
  },
  getRepos(username) {
    return get(`${BaseUrl.Github}/${toValidString(username)}/repos`);
  },
  getNotes(username) {
    return get(`${BaseUrl.Firebaseio}/${toValidString(username)}.json`);
  },
  addNote(username, note){
    return post(`${BaseUrl.Firebaseio}/${toValidString(username)}.json`, note);
  },
};

module.exports = api;
