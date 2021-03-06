'use strict';

var React = require('react-native');
var Profile = require('./Profile');
var Repositories = require('./Repositories');
var api = require('../utils/api');

var {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  } = React;

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  },
});

class Dashboard extends React.Component {
  makeBackgound(btn){
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1,
    };

    if (btn === 0) {
      obj.backgroundColor = '#48BBEC'
    } else if (btn === 1) {
      obj.backgroundColor = '#E77AAE'
    } else {
      obj.backgroundColor = '#758Bf4'
    }
    return obj;
  }

  goToProfile() {

    this.props.navigator.push({
      title: 'Profile Page',
      component: Profile,
      passProps: {userInfo: this.props.userInfo},
    });
  }

  goToRepos() {
    api.getRepos(this.props.userInfo.login)
    .then((res) => {
        this.props.navigator.push({
          title: 'Repos',
          component: Repositories,
          passProps: {
            userInfo: this.props.userInfo,
            repos: res,
          },
        });
      });
  }
  goToNotes() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>
        <TouchableHighlight
          style={this.makeBackgound(0)}
          onPress={this.goToProfile.bind(this)}
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}> View Profile </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackgound(1)}
          onPress={this.goToRepos.bind(this)}
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}> View Repos </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackgound(2)}
          onPress={this.goToNotes.bind(this)}
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}> View Notes </Text>
        </TouchableHighlight>

      </View>
    );
  }
}

module.exports = Dashboard;
