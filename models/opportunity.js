<<<<<<< HEAD
var mongoose = require('mongoose');

var OpportunitySchema = new mongoose.Schema({
    title: String,
    description: String,
    city: String,
    address: String,
    date: Date,
    duration: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    applications: [
        {
           type: mongoose.Schema.Types.ObjectId,
           ref: "User"
        },
        
     ]
});
=======
var mongoose = require('mongoose');

var OpportunitySchema = new mongoose.Schema({
    title: String,
    description: String,
    city: String,
    address: String,
    date: Date,
    duration: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    applications: [
        {
           type: mongoose.Schema.Types.ObjectId,
           ref: "User"
        },
        
     ]
});
>>>>>>> 155441e18bdbfcc2fd483b73e65bbfda087dc39d
module.exports = mongoose.model('Opportunity', OpportunitySchema);