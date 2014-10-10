/** @jsx React.DOM */

var React = require('react');

var Deck = require('./components/cards/Deck.react');
var DeckStore = require('./stores/DeckStore.js');

React.renderComponent(
    <Deck />,
    document.getElementById('react')
);
