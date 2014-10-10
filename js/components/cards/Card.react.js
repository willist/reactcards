/** @jsx React.DOM */

var React = require('react');

var CardBack = require('./CardBack.react');
var CardCorner = require('./CardCorner.react');
var CardInner = require('./CardInner.react');

var CardActionCreators = require('../../actions/CardActionCreators.js');

var suits = {
  heart:       '\u2665',
  spade:       '\u2660',
  diamond:     '\u2666',
  club:        '\u2663'
};

var cardMapping = {
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  J: "jack",
  Q: "queen",
  K: "king",
  A: "ace"
};

function getSymbol(suit) {
  return suits[suit];
}

var Card = React.createClass({
  _onClick: function() {
    CardActionCreators.clickCard(this.props.key);
  },
  render: function() {
    var cardName, inner, symbol, classes;

    if (this.props.reveal) {
      symbol = getSymbol(this.props.suit);
      cardName = cardMapping[this.props.number];
      inner = [
        <CardCorner symbol={symbol} number={this.props.number} side="top" />,
        <CardInner number={this.props.number} symbol={symbol} suit={this.props.suit} />,
        <CardCorner symbol={symbol} number={this.props.number} side="bottom" />
      ];
    } else {
      cardName = 'back';
      inner = [
        <CardBack />
      ];
    }

    classes = 'card-' + cardName;
    if (this.props.reveal) {
      classes += " " + this.props.suit;
    }

    return (
      <div className="card"
           onClick={this._onClick}>
        <div className={classes}>
          {inner}
        </div>
      </div>
    );
  }
});

module.exports = Card;
