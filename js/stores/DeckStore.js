var ParlimentAppDispatcher = require('../dispatcher/ParlimentAppDispatcher.js');
var ParlimentConstants = require('../constants/ParlimentConstants.js');
var ActionTypes = ParlimentConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');
var _ = require('underscore');

var _suits = ["heart", "club", "diamond", "spade"];
var _numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

var _cards;

function _flipCard(cardID) {
  _cards[cardID].revealed = !_cards[cardID].revealed;
}

function _updateCards(revealed) {
  revealed = revealed || false;
  _cards = _cards.map(function(card) {
    card.revealed = revealed;
    return card;
  });
}

function _shuffleCards() {
  _cards = _.shuffle(_cards);
}

function _sortCards() {
  _cards = _.sortBy(_cards, function(card) {
    return card.id;
  });
}

function _initializeDeck() {
  _cards = [];

  var k = 0;
  for (var i=0; i < _suits.length; i++) {
    for (var j=0; j < _numbers.length; j++) {
      var suit = _suits[i];
      var number = _numbers[j];

      _cards.push({
        suit: suit,
        number: number,
        revealed: true,
        id: k++
      });
    }
  }
}

var DeckStore = merge(EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  getAll: function() {
    return _cards;
  }
});

DeckStore.dispatchToken = ParlimentAppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {
    case ActionTypes.CLICK_CARD:
      _flipCard(action.cardID);
      DeckStore.emitChange();
      break;
    case ActionTypes.SHUFFLE_CARDS:
      _shuffleCards();
      DeckStore.emitChange();
      break;
    case ActionTypes.SORT_CARDS:
      _sortCards();
      DeckStore.emitChange();
      break;
    case ActionTypes.SHOW_CARDS:
      _updateCards(true);
      DeckStore.emitChange();
      break;
    case ActionTypes.HIDE_CARDS:
      _updateCards(false);
      DeckStore.emitChange();
      break;

    default:
      // do nothing
    }
});

_initializeDeck();

module.exports = DeckStore;
