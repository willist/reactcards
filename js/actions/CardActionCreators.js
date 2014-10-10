var ParlimentAppDispatcher = require('../dispatcher/ParlimentAppDispatcher.js');
var ParlimentConstants = require('../constants/ParlimentConstants.js');
var DeckStore = require('../stores/DeckStore.js');

var ActionTypes = ParlimentConstants.ActionTypes;

module.exports = {
  clickCard: function(cardID) {
    ParlimentAppDispatcher.handleViewAction({
      type: ActionTypes.CLICK_CARD,
      cardID: cardID
    });
  },
  shuffleCards: function() {
    ParlimentAppDispatcher.handleViewAction({
      type: ActionTypes.SHUFFLE_CARDS
    });
  },
  sortCards: function() {
    ParlimentAppDispatcher.handleViewAction({
      type: ActionTypes.SORT_CARDS
    });
  },
  showCards: function() {
    ParlimentAppDispatcher.handleViewAction({
      type: ActionTypes.SHOW_CARDS
    });
  },
  hideCards: function() {
    ParlimentAppDispatcher.handleViewAction({
      type: ActionTypes.HIDE_CARDS
    });
  }

};
