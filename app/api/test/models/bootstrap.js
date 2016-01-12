'use strict';

var mongoose = require('mongoose');
var config = require('./../config-test');

/*
 * beforeEach Method
 *
 * The before each method will execute every time Mocha is run. This
 * code will not run every time an individual test is run.
 */


before(function(done) {

  mongoose.connection.on('error', function(err) {
    console.log("don't have time to work around this:"+err);
  });

  // Connecting to a local test database or creating it on the fly
  mongoose.connect(config.db.mongodb);




  function clearDB() {
    for (var i in mongoose.connection.collections) {
      mongoose.connection.collections[i].remove(function() {});
    }

    return done();
  }


  if (mongoose.connection.readyState === 0) {
    mongoose.connect(config.db.test, function(err) {
      if (err) {
        throw err;
      }
      return clearDB();
    });
  } else {
    return clearDB();
  }

});

/*
 * afterEach Method
 *
 * Just like the beforeEach, afterEach is run after Mocha has completed
 * running it's queue.
 */

after(function (done) {
  mongoose.disconnect();
  console.log('close connection');
  return done();
});

