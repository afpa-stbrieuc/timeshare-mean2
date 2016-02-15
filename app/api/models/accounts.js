/**
 * New node file
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var dbc = mongoose.connection;

dbc.on('error', console.error.bind(console, 'connection error:'));
dbc.once('open', function() {
	// we're connected!
});

var AccountSchema   = new Schema({
	  number: Number,
	  balance: {type: Number, default: 120},
	  users: String, //{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	  active: Boolean,
	created_at: {type: Date, default: Date.now},
	updated_at: {type: Date, default: Date.now}

},
	{
		collection: 'account'
	});



module.exports = mongoose.model('Account', AccountSchema);