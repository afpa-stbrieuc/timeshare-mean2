/**
 * New node file
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var AccountSchema   = new Schema({
	  number: Number,
	  balance: {type: Number, default: 120},
	  users: String, //{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	  active: Boolean
});



module.exports = mongoose.model('Account', AccountSchema);