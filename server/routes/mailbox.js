var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/mailbox', function(req, res, next) {
  res.render('mailbox', {
    title: ''
  });
});

module.exports = router;
