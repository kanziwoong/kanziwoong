'use strict';
/**
 * Created by kanziw on 2016. 3. 16..
 */

let React = require('react');

let UserProfile = React.createClass({
  render: function (){
    return (
      <div>
        <p> USER PROFILE! </p>
        <p> Username: {this.props.username} </p>
        <p> Bio: {this.props.bio.name} </p>
      </div>
    );
  }
});

module.exports = UserProfile;
