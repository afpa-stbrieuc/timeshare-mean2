var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategoriesSchema = new Schema({
		label: String,
		announces: [{type: Schema.Types.ObjectId, ref: 'Announce'}]
		});

module.exports = mongoose.model('Category', CategoriesSchema);
