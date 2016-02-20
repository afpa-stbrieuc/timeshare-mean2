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
    var token;
    if (err) {
      sendJSONresponse(res, 400, err);
    } else {
      console.log("generation token");
      token = user.generateJwt();
      sendJSONresponse(res, 200, {
        "token": token
      });
    }
  });

});


// login user
router.post('/login', function(req, res) {
  console.log("c est parti pour logger cette personne");
  if (!req.body.mail || !req.body.password) {
    sendJSONresponse(res, 400, {
      "message": "All fields required"
    });
    return;
  }

  passport.authenticate('local', function(err, user, info) {
    var token;

    if (err) {
      sendJSONresponse(res, 404, err);
      return;
    }

    if (user) {
      token = user.generateJwt();
      sendJSONresponse(res, 200, {
        "token": token
      });
    } else {
      sendJSONresponse(res, 401, info);
    }
  })(req, res);

});


// list users
router.get('/', function(req, res) {
  User.find(function(err, users) {
    if (err)
      res.send(err);

    res.json(users);
  });
});


// get the User with that id
router.get('/:id', function(req, res) {

  User.findById(req.params.id, function(err, user) {
    if (err) {
      console.log('ERROR'.err);
      res.send(err);
    }
    else {
      res.json(user);
    }
  });

});

// update the User with this id
//router.put('/:id', function(req, res) {
//
//  if (req.params.user_id === undefined) return res.send(400,'user id empty');
//
//  User.findById(req.params.user_id, function(err, user) {
//
//    if (err)
//      res.send(err);

router.put('/updateProfile', function(req, res) {
  console.log("update user datas");
  if (!req.body.lastName || !req.body.firstName || !req.body.mail || !req.body._id || !req.body.password) {
    sendJSONresponse(res, 400, {
      "message": "login incorrect"
    });
    return;
  }


  var user = User.findById(req.body._id, function(err, user) {
    console.log(user);

    if (user.validPassword(req.body.password)){


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

      console.log("update done");
      console.log("generation token");
      token = user.generateJwt();
      sendJSONresponse(res, 200, {
        "token": token
      });

    }else{ sendJSONresponse(res, 400, {
      "message": "wrong password"
    });
    }

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