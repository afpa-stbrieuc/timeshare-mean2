var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResponseSchema = new Schema({
	label: String,
	description: String,
	post_date: Date,
	status: [{pending: String, accepted: String, refused: String}],
	comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Response', ResponseSchema);
