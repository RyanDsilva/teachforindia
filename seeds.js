//Database Seed File
var mongoose = require("mongoose");
var Campground = require("./models/opportunity");
function seedDB() {
    //Remove all campgrounds
    Opportunity.remove({}, function (err) {
        if (!err) {
            console.log("Cleared!");
        }
    });
}
module.exports = seedDB;