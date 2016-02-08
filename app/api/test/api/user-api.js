'use strict';

var should = require('should');

var app = require('./../../server');
var request = require('supertest')(app);


before(function() {
	app.boot(require('./../config-test'));
});

after(function() {
	app.shutdown();
});

var todo_id;
var user_id;

describe('Users: api', function() {
 


	it('GET /api/users', function(done) {

		request
			.get('/api/users')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(done);

	});

	it('POST /api/users', function(done) {

		request
			.post('/api/users')
			.type('form') //this will simulate a post like a form
    		.send({ name: 'my users 1' })
			.expect(201)
			.expect(function(res) {
		       todo_id = res.body._id;
		    })
			.end(done);


	});

	it('PUT /api/users/:todo_id', function(done) {
		request
			.put('/api/users/' + todo_id)
			.type('form')
			.send({ name: 'my modif users 1' })
			.expect(200)
			.end(done);


	});

	it('DELETE /api/users/:todo_id', function(done) {
	

		request
			.del('/api/users/' + todo_id)
			.expect(200)
			.end(done);

	});


});