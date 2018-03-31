<<<<<<< HEAD
var mongoose = require("mongoose");
 
var ApplicationSchema = new mongoose.Schema({
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        name: String
    },
    email: String,
    time: String,
    description: String,
    experience: String
});
 
=======
var mongoose = require("mongoose");
 
var ApplicationSchema = new mongoose.Schema({
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        name: String
    },
    email: String,
    time: String,
    description: String,
    experience: String
});
 
>>>>>>> 155441e18bdbfcc2fd483b73e65bbfda087dc39d
module.exports = mongoose.model("Application", ApplicationSchema);