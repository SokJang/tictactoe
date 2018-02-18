"use strict";

var tabl = document.getElementById('tictactoe');
var fields = tabl.getElementsByTagName("td");
var imgs = tabl.getElementsByTagName("img");

// reset
var resetFields = function resetFields() {
  for (var i = 0; i < fields.length; i++) {
    fields[i].setAttribute('data-player', 'blank');
    fields[i].setAttribute('class', 'default');
  }
};
var resetImgs = function resetImgs() {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute('src', 'http://localhost:3000/img/transparent.gif');
  }
};
// getter
var getPlayerFields = function getPlayerFields() {
  var i = 0;
  var player = document.querySelectorAll('.player');
  for (i; i < player.length; i++) {
    i;
  }
  return i;
};
var getAiFields = function getAiFields() {
  var i = 0;
  var player = document.querySelectorAll('.ai');
  for (i; i < player.length; i++) {
    i;
  }
  return i;
};
// setter
var setPlayerField = function setPlayerField() {
  var settedField = void 0;

  var _loop = function _loop(i) {
    fields[i].addEventListener("click", function () {
      imgs[i].setAttribute('src', 'http://localhost:3000/img/cross.svg');
      this.setAttribute('class', 'player');
      this.setAttribute('data-player', 'player');
      var numPlayer = getPlayerFields();
      var numAi = getAiFields();
      this.setAttribute('data-counter', numPlayer + numAi);
    });
  };

  for (var i = 0; i < fields.length; i++) {
    _loop(i);
  }
};
document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    resetFields();
    resetImgs();
    getPlayerFields();
    getAiFields();
    setPlayerField();
  }
};
