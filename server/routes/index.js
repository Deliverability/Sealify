var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 
    if(req.session != null && req.session.user != null) {
        res.redirect('/mailbox');
    }
    res.render('index', {
    title: ''
  });
});

module.exports = router;
