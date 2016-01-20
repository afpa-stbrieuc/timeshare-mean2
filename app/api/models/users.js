/**
 * New node file
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
	  userID: Number,
	  firstName: String,
	  lastName: String,
	  address: String,
	  zipcode: Number,
	  country: String,
	  mail: String,
	  phone: { 
		type: String,
			validate:{
				validator: function(v){
					if (!v){ return true}else{
						return /+?d{11}/.test(v); //  test if phone number is 11 digits
					}

				},
				message: '{VALUE} is not a valid phone number!'
			}
		},
	  cellphone: String,
	  birthdate: Date,
	  subscriptiondate: {type: Date, default: Date.now},
	  lastconnectiondate: Date,
	  lastconnectionip: String,
	  nickname: String,
	  password: String,
	  avatar: String, // stocke le lien vers l'image. une autre solution est
						// gridFS pour stocker une image
	  active: {type: Boolean, default: true}
		},
		{
			autoIndex: false
			},
	{
		collection: 'user'
	});

module.exports = mongoose.model('timeshare', UserSchema);