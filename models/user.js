<<<<<<< HEAD
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
    name        : String,
    username    : String,
    password    : String,
    email       : String,
    phone       : Number,
    userType    : String
});

UserSchema.plugin(passportLocalMongoose);

=======
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
    name        : String,
    username    : String,
    password    : String,
    email       : String,
    phone       : Number,
    userType    : String
});

UserSchema.plugin(passportLocalMongoose);

>>>>>>> 155441e18bdbfcc2fd483b73e65bbfda087dc39d
module.exports = mongoose.model('User', UserSchema);