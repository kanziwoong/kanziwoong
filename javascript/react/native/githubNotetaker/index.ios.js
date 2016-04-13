'use strict';

let React = require('react-native');
let Main = require('./App/components/Main');

let {AppRegistry, NavigatorIOS, StyleSheet} = React;

let styles = StyleSheet.create({
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
