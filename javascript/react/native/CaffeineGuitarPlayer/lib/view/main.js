'use strict';
/**
 * Created by kanziw on 2016. 7. 12..
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import ChannelVideoList from './list';

export default class MainScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <TouchableHighlight onPress={() => {
          this.props.navigator.push(this.props.routesDic.ChannelVideoList);
        }}>
          <Text>Hello!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
