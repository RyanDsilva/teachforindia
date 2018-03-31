<<<<<<< HEAD
var Opportunity = require("../models/opportunity");
var Application = require("../models/application");

var middlewareObj = {};

middlewareObj.checkOpportunityOwnership = function(req, res, next) {
 if(req.isAuthenticated()){
    Opportunity.findById(req.params.id, function(err, opportunity){
           if(err){
               req.flash("error", "Campground not found");
               res.redirect("back");
           }  else {
               // does user own the campground?
            if(opportunity.author.id.equals(req.user._id)) {
                next();
            } else {
                req.flash("error", "You don't have permission to do that");
                res.redirect("back");
            }
           }
        });
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
}

middlewareObj.checkApplicationOwnership = function(req, res, next) {
 if(req.isAuthenticated()){
    Application.findById(req.params.app_id, function(err, application){
           if(err){
               res.redirect("back");
           }  else {
               // does user own the comment?
            if(application.author.id.equals(req.user._id)) {
                next();
            } else {
                req.flash("error", "You don't have permission to do that");
                res.redirect("back");
            }
           }
        });
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
}

middlewareObj.isStaff = function(req, res, next){
    if(req.isAuthenticated()){
        if(req.user.userType==='Staff'){
            return next();
        }
    }
    req.flash("error", "You need to be a Staff Member in order to do that");
    res.redirect("back");
}

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that");
    res.redirect("/login");
}

=======
var Opportunity = require("../models/opportunity");
var Application = require("../models/application");

var middlewareObj = {};

middlewareObj.checkOpportunityOwnership = function(req, res, next) {
 if(req.isAuthenticated()){
    Opportunity.findById(req.params.id, function(err, opportunity){
           if(err){
               req.flash("error", "Campground not found");
               res.redirect("back");
           }  else {
               // does user own the campground?
            if(opportunity.author.id.equals(req.user._id)) {
                next();
            } else {
                req.flash("error", "You don't have permission to do that");
                res.redirect("back");
            }
           }
        });
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
}

middlewareObj.checkApplicationOwnership = function(req, res, next) {
 if(req.isAuthenticated()){
    Application.findById(req.params.app_id, function(err, application){
           if(err){
               res.redirect("back");
           }  else {
               // does user own the comment?
            if(application.author.id.equals(req.user._id)) {
                next();
            } else {
                req.flash("error", "You don't have permission to do that");
                res.redirect("back");
            }
           }
        });
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
}

middlewareObj.isStaff = function(req, res, next){
    if(req.isAuthenticated()){
        if(req.user.userType==='Staff'){
            return next();
        }
    }
    req.flash("error", "You need to be a Staff Member in order to do that");
    res.redirect("back");
}

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that");
    res.redirect("/login");
}

>>>>>>> 155441e18bdbfcc2fd483b73e65bbfda087dc39d
module.exports = middlewareObj;