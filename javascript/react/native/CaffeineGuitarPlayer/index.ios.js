/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

const _ = require('lodash');
import {keyBy} from 'lodash';
import React, {Component} from 'react';
import {AppRegistry, Navigator} from 'react-native';
import MainScene from './lib/view/main';
import ChannelVideoList from './lib/view/list';

class RouteBuilder {
  constructor() {
    this._routes = [];
  }

  register(title, component) {
    this._routes.push({title, name: component.name, component});
    return this;
  }

  getRoutes() {
    return this._routes;
  }

  getRoutesDic() {
    return keyBy(this.getRoutes(), 'name');
  }
}

class CaffeineGuitarPlayer extends Component {

  constructor(props) {
    super(props);
    const routeBuilder = new RouteBuilder().register('Main', MainScene).register('Channel', ChannelVideoList);
    this.state = {
      /** @type {Array.<RouteObject>} */
      routes: routeBuilder.getRoutes(),
      /** @type {object.<string, RouteObject>} */
      routesDic: routeBuilder.getRoutesDic(),
    };
  }

  render() {
    return (
      <Navigator
        initialRoute={this.state.routes[0]}
        initialRouteStack={this.state.routes}
        renderScene={(route, navigator) =>
          <MainScene route={route} navigator={navigator} routesDic={this.state.routesDic} />
        }>
      </Navigator>
    );
  }
}

AppRegistry.registerComponent('CaffeineGuitarPlayer', () => CaffeineGuitarPlayer);
