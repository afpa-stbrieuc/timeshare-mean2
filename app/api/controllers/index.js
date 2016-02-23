var express = require('express');
//var passport = require('passport');
var User = require('../models/users');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
      secret: process.env.JWT_SECRET,
      userProperty:'payload'
  });

router.use('/api/users', require('./users'))
router.use('/api/accounts', require('./users'));
router.use('/api/announces', require('./announces'));
router.use('/api/users', require('./users'));
//do the same for responses and serviceCategories

//static assets
router.use(express.static(__dirname + '/../../public'));

router.get('/*', function(req, res) {
  res.sendFile('index.html', {
    'root': __dirname + '/../../public'
  });
});

/*router.get('/register', function(req, res) {
    res.render('register', { });
});

router.post('/register', function(req, res) {
    Users.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
        if (err) {
            return res.render('register', { user : user });
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});*/

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

router.get('/*', function(req, res) {
    res.sendFile('index.html', {
        'root': __dirname + '/../../public'
    });
});

module.exports = router;