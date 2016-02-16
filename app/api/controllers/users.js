/**
 * New node file
 */
var express = require('express');
var router = express.Router();

var User = require('../models/users');

var Accountdb = require('../models/accounts');
var passport = require('passport');
var mongoose = require('mongoose');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


router.post('/register', function(req, res) {
  console.log("register new user");
  if (!req.body.lastName || !req.body.firstName || !req.body.mail || !req.body.password) {
    sendJSONresponse(res, 400, {
      "message": "All fields required"
    });
    return;
  }

  var user = new User(); // create a new instance of the User model
  user.firstName = req.body.firstName,
    user.lastName = req.body.lastName,
    user.address = req.body.address,
    user.zipcode = req.body.zipcode,
    user.country = req.body.country,
    user.mail = req.body.mail,
    user.phone = req.body.phone,
    user.cellphone = req.body.cellphone,
    user.birthdate = req.body.birthdate,
    user.subscriptiondate = req.body.subscriptiondate,
    user.lastconnectiondate = req.body.lastconnectiondate,
    user.lastconnectionip = req.body.lastconnectionip,
    user.nickname = req.body.nickname,
    user.password = req.body.password,
    user.avatar = req.body.avatar,
    user.active = req.body.active;


  user.save(function(err) {
    if (err)
      res.send(err);

    res.json(201, user);
  });


});

router.get('/', function(req, res) {
  User.find(function(err, users) {
    if (err)
      res.send(err);

    res.json(users);
  });
});





// get the User with that id
router.get('/:user_id', function(req, res) {

  User.findById(req.params.user_id, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });

});

// update the User with this id
router.put('/:user_id', function(req, res) {

  if (req.params.user_id === undefined) return res.send(400,'user id empty');

  User.findById(req.params.user_id, function(err, user) {

    if (err)
      res.send(err);

    user.firstName = req.body.firstName,
      user.lastName = req.body.lastName,
      user.address = req.body.address,
      user.zipcode = req.body.zipcode,
      user.country = req.body.country,
      user.mail = req.body.mail,
      user.phone = req.body.phone,
      user.cellphone = req.body.cellphone,
      user.birthdate = req.body.birthdate,
      user.subscriptiondate = req.body.subscriptiondate,
      user.lastconnectiondate = req.body.lastconnectiondate,
      user.lastconnectionip = req.body.lastconnectionip,
      user.nickname = req.body.nickname,
      user.password = req.body.password,
      user.avatar = req.body.avatar,
      user.active = req.body.active;

    user.save(function(err) {
      if (err)
        res.send(err);

      res.json(user);
    });

  });
});

// delete the User with this id
router.delete('/:user_id', function(req, res) {

  User.remove({
    _id: req.params.user_id
  }, function(err, user) {
    if (err)
      res.send(err);

    res.json({
      message: 'Successfully deleted'
    });
  });

});


module.exports = router