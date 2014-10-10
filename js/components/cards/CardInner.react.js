/** @jsx React.DOM */

var React = require('react');

var faceCards = {
  J: "jack",
  Q: "queen",
  K: "king",
};

var ordinalCards = {
  A: ["middle_center"],
  2: ["top_center", "bottom_center"],
  3: ["top_center", "middle_center", "bottom_center"],
  4: ["top_left", "top_right", "bottom_left", "bottom_right"],
  5: ["top_left", "top_right", "middle_center", "bottom_left", "bottom_right"],
  6: ["top_left", "top_right", "middle_left", "middle_right", "bottom_left", "bottom_right"],
  7: ["top_left", "top_right", "middle_left", "middle_top", "middle_right", "bottom_left", "bottom_right"],
  8: ["top_left", "top_right", "middle_left", "middle_top", "middle_right", "middle_bottom",
      "bottom_left", "bottom_right"],
  9: ["top_left", "top_right", "middle_top_left", "middle_center", "middle_top_right",
      "bottom_left", "bottom_right", "middle_bottom_left", "middle_bottom_right"],
  10: ["top_left", "top_right", "middle_top_left", "middle_top_center", "middle_top_right",
        "bottom_left", "bottom_right", "middle_bottom_center", "middle_bottom_left",
        "middle_bottom_right"]

};


var CardInner = React.createClass({
  render: function() {
    var that = this;

    var classes = "";
    if (this.props.number in faceCards) {
      var src="img/faces/face-" + faceCards[this.props.number] + "-" + this.props.suit + ".png";
      return (
        <span className="face middle_center">
          <img src={src} />
        </span>
      );
    } else {
      var symbols = ordinalCards[this.props.number].map(function (item) {
        var classes = "suit " + item;
        return (
          <span className={classes}>{that.props.symbol}</span>
        );
      });

      return (
        <div>{symbols}</div>
      );
    }
  }
});

module.exports = CardInner;
