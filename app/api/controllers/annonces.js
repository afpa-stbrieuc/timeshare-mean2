var express = require('express');
var router = express.Router();

var Annonce = require('../models/annonces');

router.get('/', function(req, res) {
	Annonce.find(function(err, annonces) {
		if (err){
			res.send(err);
		}

		res.json(annonces);
	});
});

//add annonce
router.post('/', function(req, res) {

	var annonce = new Annonce(); // create a new instance of the annonce model
	annonce.label = req.body.label; // set the Annonces label (comes from the request)

	annonce.save(function(err) {
		if (err){
			res.send(err);
		}

		res.json(201, annonce);
	});


});

// get the Annonce with that id
router.get('/:annonce_id', function(req, res) {

	Annonce.findById(req.params.annonce_id, function(err, annonce) {
			if (err){
				res.send(err);
			}
			res.json(annonce);
		});

});

// update the Annonce with this id
router.put('/:annonce_id', function(req, res) {

	if (req.params.annonce_id === undefined){
		return res.send(400,'annonce id empty');
	}

	Annonce.findById(req.params.annonce_id, function(err, annonce) {

		if (err){
			res.send(err);
		}

		annonce.name = req.body.label;
		annonce.save(function(err) {
			if (err){
				res.send(err);
			}

			res.json(annonce);
		});

	});	
});

//delete the Annonce with this id
router.delete('/:annonce_id', function(req, res) {

	Annonce.remove({
		_id: req.params.annonce_id
	}, function(err, annonce) {
		if (err){
			res.send(err);
		}

		res.json({
			message: 'Annonce successfully deleted'
		});
	});

});


module.exports = router;
