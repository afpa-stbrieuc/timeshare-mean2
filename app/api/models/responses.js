var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResponsesSchema = new Schema({
	accounts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Account'}],
	label: String,
	description: String,
	post_date: Date,
	status: [{pending: String, accepted: String, refused: String}],
	comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Responses', ResponsesSchema);
