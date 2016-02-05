'use strict';

var React = require('react-native');
var Main = require('./App/components/Main');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  } = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
});

class githubNotetaker extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Github NoteTaker',
          component: Main
        }}/>
    );
  }
}

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
