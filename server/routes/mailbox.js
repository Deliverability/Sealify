var express = require('express');
var router = express.Router();

/* GET mailbox. */
router.get('/', function(req, res, next) {
    if(req.session.user == null) {
        res.redirect('/');
    }
    res.render('mailbox', {
    });
});

module.exports = router;
