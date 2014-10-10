/** @jsx React.DOM */

var React = require('react');

var CardCorner = React.createClass({
  render: function() { 
    var classes = "corner " + this.props.side;
    return (
      <div className={classes}>
        <span className="number">{this.props.number}</span>
        <span>{this.props.symbol}</span>
      </div>
    );
  }
});

module.exports = CardCorner;
