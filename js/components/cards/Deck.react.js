/** @jsx React.DOM */

var React = require('react');

var Card = require('./Card.react');
var GenericButton = require('./GenericButton.react');

var DeckStore = require('../../stores/DeckStore.js');

function getStateFromStores() {
  return {
    deck: DeckStore.getAll()
  };
}

var Deck = React.createClass({
  getInitialState: function() {
    return getStateFromStores();
  },
  componentDidMount: function() {
    DeckStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    DeckStore.removeChangeListener(this._onChange);
  },
  render: function() {
    var cards = this.state.deck.map(function(card, idx) {
      return (
        <Card suit={card.suit} number={card.number} reveal={card.revealed} key={idx} />
      );
    });

    return (
      <div>
        {cards}
        <div className="buttonRow">
          <GenericButton action="shuffle"
                        text="Shuffle Cards" />
          <GenericButton action="sort"
                        text="Sort Cards" />
          <GenericButton action="hide"
                        text="Hide Cards" />
          <GenericButton action="show"
                        text="Show Cards" />
        </div>
      </div>
    );
  },
  _onChange: function() {
    this.setState(getStateFromStores());
  }
});

module.exports = Deck;

