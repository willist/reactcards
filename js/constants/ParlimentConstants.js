var keyMirror = require('react/lib/keyMirror');

module.exports = {

  ActionTypes: keyMirror({
    CLICK_CARD: null,
    SHUFFLE_CARDS: null,
    SORT_CARDS: null,
    REVEAL_CARDS: null,
    HIDE_CARDS: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};
