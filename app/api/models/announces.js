var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnnounceSchema = new Schema({
	title: String,
	details: String,
	startDate: {type: Date, default:Date.now},
	endDate: {type: Date},
	postDate: {type: Date, default:Date.now},
	timeAmount: Number,	
	type: String,	
	status: String,
	localisation: String,
	media: String,
	account: String, //{type: Schema.Types.ObjectId, ref: 'Account'},
	comments: [{type: String}], //{type: Schema.Types.ObjectId, ref: 'Comment'}],
	category: String //{type: Schema.Types.ObjectId, ref: 'Category'}
});

module.exports = mongoose.model('Announce', AnnounceSchema);
