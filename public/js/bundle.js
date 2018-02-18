"use strict";

var resetter = document.getElementById('tictactoe');
var fields = resetter.getElementsByTagName("td");
var imgs = resetter.getElementsByTagName("img");

var resetFields = function resetFields() {
  for (var i = 0; i < fields.length; i++) {
    fields[i].setAttribute('data-player', 'blank');
    fields[i].setAttribute('data-counter', 0);
    fields[i].setAttribute('class', 'default');
  }
};
var resetImgs = function resetImgs() {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute('src', 'http://localhost:3000/img/transparent.gif');
  }
};

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    resetFields();
    resetImgs();
  }
};
