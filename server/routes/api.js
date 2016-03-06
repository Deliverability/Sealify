var express = require('express');
var session = require('express-session');
var router = express.Router();
var config = require('../config.js');
var gcloud = require('gcloud')(config.gcloud);
var dataset = gcloud.datastore.dataset(config.gcloud);

router.get('/login', function(req, res, next) {
  res.send("Unimplemented");
});

router.get('/write', function(req, res, next) {
  var blogPostData = {
    title: 'How to make the perfect homemade pasta',
    author: 'Andrew Chilton',
    isDraft: true
  };

  var blogPostKey = dataset.key('BlogPost');
  dataset.save({
    key: blogPostKey,
    data: blogPostData
  }, function(err) {
    res.send(err);
  });
});

router.post('/hook', function(req, res, next) {
  console.log(req.body);
  res.send("OK");
});

router.get('/mail', function(req, res, next) {
  console.log(req.query);
  var user = req.query['user'];
  var key = dataset.key(['Email', 'default', 'userto', user]);
  dataset.get(key, function(err, entity) {
    console.log(err);
    console.log(entity);
  });
  res.send("yay");
});

router.get('/fakemail', function(req, res, next) {
  res.send([{
    userfrom: 'trombeard',
    userto: 'wijagels',
    message: 'Buy more ovaltine'
  },
  {
    userfrom: 'trombeard',
    userto: 'wijagels',
    message: 'hello world'
  }
  ]);
});

module.exports = router;
