var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResponsesSchema = new Schema({
	title: String,
	details: String,
	postDate: Date,
	timeAmount: Number,
	status: String,
	accounts: [{type: Schema.Types.ObjectId, ref: 'Account'}],	
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
	announces: [{type: Schema.Types.ObjectId, ref: 'Announce'}]
});

module.exports = mongoose.model('Response', ResponsesSchema);
