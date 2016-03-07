'use strict';

let React = require('react-native');
let co = require('co');

let api = require('../utils/api');
let Dashboard = require('./Dashboard');

let {View, Text, StyleSheet, TextInput, TouchableHighlight, ActivityIndicatorIOS} = React;

let styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: '',
    }
  }

  handleChange(event) {
    this.setState({
      username: event.nativeEvent.text
    })
  }

  /**
   * 초기화 헬퍼 함수
   * @param [err] {string}
   */
  setInit(err) {
    this.setState({
      isLoading: false,
      error: err ? err : '',
      username: err ? this.state.username : '',
    });
  }

  handleSubmit() {
    return co(function *() {
      // update our indicatorIOS spinner
      this.setState({
        isLoading: true
      });

      // fetch data from github
      let res = yield api.getBio(this.state.username);
      let err;
      if (res.message === 'Not Found') {
        err = 'User not found';
      } else {
        //reroute to the next passing that github information
        this.props.navigator.push({
          title: res.name || res.login,
          component: Dashboard,
          passProps: {userInfo: res},
        });
      }
      this.setInit(err);
    }.bind(this));
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}> Search for a Github User </Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.username}
          onChange={this.handleChange.bind(this)}/>
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white">
          <Text style={styles.buttonText}> SEARCH </Text>
        </TouchableHighlight>
        <ActivityIndicatorIOS animating={this.state.isLoading} color='#111' size='large'/>
        <Text> {this.state.error} </Text>
      </View>
    )
  }
}

module.exports = Main;