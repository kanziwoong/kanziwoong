'use strict';
/**
 * Created by kanziw on 2016. 3. 16..
 */

let React = require('react');
let Main = require('../components/Main');
let Home = require('../components/Home');
let Profile = require('../components/Profile');
let Router = require('react-router');
let Route = Router.Route;
let IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path="/" component={Main}>
    <Route path="profile/:username" component={Profile}/>
    <IndexRoute component={Home}/>
  </Route>
);
