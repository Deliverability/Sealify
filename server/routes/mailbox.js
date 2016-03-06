var express = require('express');
var router = express.Router();

/* GET mailbox. */
router.get('/', function(req, res, next) {
  res.render('mailbox', {
  });
});

module.exports = router;
