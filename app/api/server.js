require('dotenv').config({path: __dirname + '/.env'});
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var multer = require('multer');

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

console.log(process.env.JWT_SECRET);

var port = process.env.PORT || 3000;

var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var config = require('./config');
app.set('superSecret', config.secret);

global.uploadDir = path.join(path.resolve(__dirname),'../public/uploads');
console.log('path='+global.uploadDir);

app.use(function(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({
      "message": err.name + ": " + err.message
    });
  }
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// configure body parser so we can get http body data
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));


require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));


//require will first load controllers/index.js
app.use(require('./controllers'));
// app.use(require('./routing'));



var server;

// passport config
var User = require('./models/users');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.boot = function(config){

  console.log(config);

  mongoose.connect(config.db.mongodb); // connect to our database


  server = app.listen(port, function() {
    console.log('Listening on port ' + port);
  });
};

app.shutdown = function() {
  console.log('Shutdown server on port ' + port);
  server.close();
};

//if launched via command line or used as a module (e.g tests) @see http://stackoverflow.com/questions/8864365/can-i-know-in-node-js-if-my-script-is-being-run-directly-or-being-loaded-by-an
if (require.main === module) {
  app.boot(require('./config'));
}
else {
  console.info('Running app as a module');

  module.exports = app;
}
