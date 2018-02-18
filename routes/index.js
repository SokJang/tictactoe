const express = require('express');
const router = express.Router();

// routing method
router.get('/', function(req, res) {
  const pagetitle = 'Tic Tac Toe';
  // render from path
  res.render('pages/index', {
    pagetitle: pagetitle
  });
});

module.exports = router;