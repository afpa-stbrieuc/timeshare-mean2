'use strict';


var b = require('./bootstrap');
var should = require('should');

var Todo = require('./../../models/todos');


/*
 * Mocha Test
 *
 * Tests are organized by having a "describe" and "it" method. Describe
 * basically creates a "section" that you are testing and the "it" method
 * is what runs your test code.
 *
 * For asynchronous tests you need to have a done method that you call after
 * your code should be done executing so Mocha runs to test properly.
 */

describe('Todos: models', function() {


  describe('#list()', function() {
    it('should list todos', function(done) {
     
      Todo.find(function(err, todos) {
        // Confirm that that an error does not exist
        should.not.exist(err);
        // verify that the returned user is what we expect
        todos.should.not.be.null;
        // Call done to tell mocha that we are done with this test
        done();
      });
    });
  });


  describe('#create()', function() {
    it('should create a new Todo', function(done) {
      // Create a User object to pass to User.create()
      var todo = {
        name: 'kikou'
      };
      Todo.create(todo, function(err, createdTodo) {
        // Confirm that that an error does not exist
        should.not.exist(err);
        // verify that the returned user is what we expect
        createdTodo.name.should.equal('kikou');
        // Call done to tell mocha that we are done with this test
        done();
      });
    });
  });






});