'use strict';
/**
 * Created by kanziw on 2016. 3. 16..
 */

let React = require('react');

let Repos = React.createClass({
  render: function (){
    return (
      <div>
        <p> REPOS </p>
        <p> REPOS: {this.props.repos} </p>
      </div>
    );
  }
});

module.exports = Repos;
