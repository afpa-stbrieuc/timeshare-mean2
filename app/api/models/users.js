/**
 * New node file
 */

var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var validator = require('node-mongoose-validator');
var Schema = mongoose.Schema;

var UserSchema;
UserSchema = new Schema (
  {
    lastName: {
      type: String,
      maxength: 50
    },
    firstName: {
      type: String,
      maxlength: 50
    },
    address: {
      type: String,
      maxlength: 120
    },
    zipcode: Number,
    country: {
      type: String,
      maxlength: 40
    },
    mail: {
      type: String,
      required: true,
      index: {
        unique: true
      }
    },
    phone: {
      type: String,
      validate: {
        validator: function (v) {
          if (!v) {
            return true
          } else {
            return /\+?\d{11}/.test(v); //  test if phone number is 11 digits
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
    avatar: String, // stocke le lien vers l'image. une autre solution est
    // gridFS pour stocker une image
    active: {
      type: Boolean,
      default: true
    },
    verified: {
      type: Boolean,
      default: false
    },
    hash: String,
    salt: String,
    admin: {
      type: Boolean,
      default: false
    }
  },  {
    autoIndex: false
  },  {
    collection: 'user'
  });

UserSchema.methods.setPassword = function(password) {
  console.log('crypto password : ' + password);
  this.salt = crypto.randomBytes(16).toString('hex');
  console.log('salt' + this.salt);
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  console.log('hash : ' + this.hash);
};

UserSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  return this.hash === hash;
};

UserSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    mail: this.mail,
    lastName: this.lastName,
    firstName: this.firstName,
    tel: this.tel,
    address: this.address,
    exp: parseInt(expiry.getTime() / 1000),
  }, process.env.JWT_SECRET); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

UserSchema.path('lastName').validate(validator.notEmpty(), 'Please provide a lastName.');
UserSchema.path('firstName').validate(validator.notEmpty(), 'Please provide a firstName.');
UserSchema.path('lastName').validate(validator.isLength({
  min: 3,
  max: undefined
}), 'LastName must be at least 3 characters.');
UserSchema.path('firstName').validate(validator.isLength({
  min: 3,
  max: undefined
}), 'FirstName must be at least 3 characters.');
UserSchema.path('mail').validate(validator.isEmail(), 'Please provide a valid email address example@example.com');

module.exports = mongoose.model('User', UserSchema);