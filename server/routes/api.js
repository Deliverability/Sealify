var express = require('express');
var session = require('express-session');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var async = require('async');
var bcrypt = require('bcrypt');

var BC_LEVEL = 10;
var db = null;
var users = null;
var url = 'mongodb://localhost:27017/sealify';
MongoClient.connect(url, function(err, database) {
    if(err != null) {
        console.error("Alert: no db connection :(");
    }
    else {
        db = database;
        users = database.collection('users');
        console.log("Connected correctly to server");
    }
});

router.get('/login', function(req, res, next) {
    if(db == null) {
        res.status(500);
        res.send("No mongo connection, please try again later");
        return;
    }
    async.waterfall([
        function(callback) {
            users.findOne({'user': req.query.user}, function(err, docs) {
                if(!docs) {
                    err = "Invalid user";
                    callback(err, docs);
                    return;
                }
                callback(err, docs);
            });
        },
        function(docs, callback) {
            bcrypt.compare(req.query.pass, docs.password, function(err, res) {
                if(res) {
                    req.session.user = docs.user;
                }
                else {
                    err = "Invalid password";
                }
                callback(err, docs);
            });
        }
    ],
    function(err, result) {
        if(err) {
            res.status(401);
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
});

router.get('/logout', function(req, res, next) {
    req.session.user = null;
    res.send("Logged out");
});

router.get('/write', function(req, res, next) {
  req.session.k = 1
  res.send('hi');
});

router.post('/hook', function(req, res, next) {
  console.log(req.body);
  res.send("OK");
});

router.get('/mail', function(req, res, next) {
  console.log(req.query);
  var user = req.query['user'];
  res.send("yay");
});

router.get('/fakemail', function(req, res, next) {
  res.send([{
    id: 'lau98uq398fniuj',
    userfrom: 'trombeard',
    userto: 'wijagels',
    subject: 'dankmemes',
    message: 'Buy more ovaltine'
  },
  {
    id: 'kjf982jifko',
    userfrom: 'trombeard',
    userto: 'wijagels',
    subject: 'dankmemes',
    message: 'hello world'
  }
  ]);
});

module.exports = router;
