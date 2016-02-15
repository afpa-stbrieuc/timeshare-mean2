/**
 * /api/accounts/ controller node file
 */
var express = require('express');
var router = express.Router();
var User = require('../models/users');
var Account = require('../models/accounts');

router.get('/', function(req, res) {
	Account.find(function(err, accounts) {
		if (err){
			res.send(err);
		}
		res.json(accounts);
	});
});

//add account (Create)
router.post('/', function(req, res) {

	var account = new Account(); // create a new instance of the Account model
	// set the accounts details (comes from the request)
	account.number= req.body.number,
	account.balance= req.body.balance,
	account.user= req.body.user,
	account.active= req.body.active;

	account.save(function(err) {
		if (err){
			res.send(err);
	}
		res.json(201, account);
	});


});

// get the Account with that id (Read)
router.get('/:account_id', function(req, res) {

		Account.findById(req.params.account_id, function(err, account) {
			if (err){
				res.send(err);
			}
			res.json(account);
		});

});

// update the Account with this id (Update)
router.put('/:account_id', function(req, res) {

	if (req.params.account_id === undefined) {return res.send(400,'account id empty');}

	Account.findById(req.params.account_id, function(err, account) {

		if (err){
			res.send(err);

			account.userid = req.body.userid; // set the Account userid (comes from the request)
			account.solde = req.body.solde;
			account.advertsid = req.body.announceid;
		}
		account.name = req.body.name;
		account.save(function(err) {
			if (err){
				res.send(err);
			}
			res.json(account);
		});

	});	
});

// delete the Account with this id (Delete)
router.delete('/:account_id', function(req, res) {

	Account.remove({
		_id: req.params.account_id
	}, function(err, account) {
		if (err){
			res.send(err);
		}
		res.json({
			message: 'Successfully deleted'
		});
	});

});


module.exports = router;