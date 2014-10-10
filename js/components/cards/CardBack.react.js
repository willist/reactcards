/** @jsx React.DOM */

var React = require('react');

var CardBack = React.createClass({
  render: function() {
    return (
      <span className="middle_center">
        <img src="img/back.png" />
      </span>
    );
  }
});

module.exports = CardBack;
