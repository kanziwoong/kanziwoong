'use strict';
/**
 * Created by kanziw on 2016. 3. 16..
 */

let React = require('react');

let Notes = React.createClass({
  render: function (){
    return (
      <div>
        <p> NOTES </p>
        <p> {this.props.notes} </p>
      </div>
    );
  }
});

module.exports = Notes;
