var express = require('express');
var router = express.Router();

var Announce = require('../models/announces');

router.get('/', function(req, res) {
	Announce.find(function(err, announces) {
		if (err){
			res.send(err);
		}

		res.json(announces);
	});
});

//add annonce
router.post('/', function(req, res) {

	var announce = new Announce(); // create a new instance of the announce model
	announce.title = req.body.title, // set the Announces label (comes from the request)
	announce.details = req.body.details,
	announce.startDate = req.body.Date,
	announce.endDate = req.body.Date,
	announce.postDate = req.body.Date,
	announce.timeAmount = req.body.timeAmount,
	announce.status = req.body.status,
	announce.localisation = req.body.localisation,
	announce.media = req.body.media,
	announce.account = req.body.account,
	announce.comments = req.body.comment,
	announce.category = req.body.category;

	announce.save(function(err) {
		if (err){
			res.send(err);
		}

		res.json(201, announce);
	});


});

// get the Announce with that id
router.get('/:announce_id', function(req, res) {

	Announce.findById(req.params.announce_id, function(err, announce) {
			if (err){
				res.send(err);
			}
			res.json(announce);
		});

});

// update the Announce with this id
router.put('/:_id', function(req, res) {

	if (req.params._id === undefined){
		return res.send(400,'announce id empty');
	}

	Announce.findById(req.params._id, function(err, announce) {

		if (err){
			res.send(err);
		}

		announce.name = req.body.title;
		announce.save(function(err) {
			if (err){
				res.send(err);
			}

			res.json(announce);
		});

	});	
});

//delete the Announce with this id
router.delete('/:announce_id', function(req, res) {

	Announce.remove({
		_id: req.params.announce_id
	}, function(err, announce) {
		if (err){
			res.send(err);
		}

		res.json({
			message: 'Announce successfully deleted'
		});
	});

});


module.exports = router;
