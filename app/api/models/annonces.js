var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnnonceSchema = new Schema({
	accounts: {type: mongoose.Schema.Types.ObjectId, ref: 'Account'},
	label: String,
	type: String,
	description: String,
	post_date: Date,
	start_date: Date,
	end_date: Date,
	available: Boolean,
	comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
	serviceCategories: {type: mongoose.Schema.Types.ObjectId, ref: 'ServiceCategorie'}
});

module.exports = mongoose.model('Annonce', AnnonceSchema);
