'use strict';
/**
 * Created by kanziw on 2016. 3. 16..
 */
let React = require('react');
let ReactDOM = require('react-dom');
let Router = require('react-router').Router;
let routes = require('./config/routes');

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);