/** @jsx React.DOM */

var React = require('react');

var CardActionCreators = require('../../actions/CardActionCreators.js');

var GenericButton = React.createClass({
  render: function() {
    classes = "generic-button " + this.props.action;

    return (
      <button className={classes}
              type="submit"
              onClick={this._onClick}>
        {this.props.text}
      </button>
    );
  },
  _onClick: function() {
    switch (this.props.action) {
      case "shuffle":
        CardActionCreators.shuffleCards();
        break;
      case "sort":
        CardActionCreators.sortCards();
        break;
      case "show":
        CardActionCreators.showCards();
        break;
      case "hide":
        CardActionCreators.hideCards();
        break;
      default:
        // do nothing
    }
  }
});


module.exports = GenericButton;
