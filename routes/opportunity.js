<<<<<<< HEAD
const express = require('express');
const Router = express.Router();
var User = require('../models/user');
var Opportunity = require('../models/opportunity');
var middleware = require("../middleware");

//INDEX ROUTE
Router.get('/', (req, res) => {
    //Get Data from DB
    Opportunity.find({}, function (err, opportunities){
        if(!err) {
            res.render('opportunity/index', {opportunities:opportunities});
        }
    });
});
//NEW ROUTE
Router.get('/new', middleware.isStaff, (req, res) => {
    res.render('opportunity/new');
});
//CREATE ROUTE
Router.post('/', middleware.isStaff, (req, res) => {
    //Get Data from Form and Add To DB
    var title = req.body.title;
    var description = req.body.description;
    var city = req.body.city;
    var duration = req.body.duration;
    var address = req.body.address;
    var date = req.body.date;
    var author = {
        id: req.user._id
    };
    var newOpportunity = {
        title: title,  
        description: description,
        city: city,
        address: address,
        duration: duration,
        date: date, 
        author:author
    };
    //Add To DB
    Opportunity.create(newOpportunity, function (err, opportunity){
        if(err) {
            //Handle error
            res.redirect('/opportunity');
        } else {
            console.log('Added to DB');
            //Redirect to Opportunities
            res.redirect('/opportunity');
        }
    });
});
//SHOW ROUTE
Router.get('/:id', (req, res) => {
    //Find Campground by ID
    Opportunity.findById(req.params.id).populate('applications').exec(function (err, opportunity){
        if(!err) {
            //Render the Templates
            res.render('opportunity/show', {opportunity:opportunity});
        }
    });
});
//EDIT ROUTE
Router.get('/:id/edit', middleware.checkOpportunityOwnership, (req, res) => {
    Opportunity.findById(req.params.id, function (err, opportunity){
        if(!err) {
            //Render the Templates
            res.render('opportunity/edit', {opportunity:opportunity});
        }
    });
});
//UPDATE ROUTE
Router.put('/:id/edit', middleware.checkOpportunityOwnership, (req, res) => {
    Opportunity.findByIdAndUpdate(req.params.id, req.body.opportunity, function (err, opportunity){
        if(!err) {
            res.redirect('/opportunity/' + req.params.id);
        }
    });
});
//DESTROY ROUTE
Router.delete('/:id', middleware.checkOpportunityOwnership, (req, res) => {
    Opportunity.findByIdAndRemove(req.params.id, function(err){
        if(!err) {
            res.redirect('/opportunity');
        }
    });
});

=======
const express = require('express');
const Router = express.Router();
var User = require('../models/user');
var Opportunity = require('../models/opportunity');
var middleware = require("../middleware");

//INDEX ROUTE
Router.get('/', (req, res) => {
    //Get Data from DB
    Opportunity.find({}, function (err, opportunities){
        if(!err) {
            res.render('opportunity/index', {opportunities:opportunities});
        }
    });
});
//NEW ROUTE
Router.get('/new', middleware.isStaff, (req, res) => {
    res.render('opportunity/new');
});
//CREATE ROUTE
Router.post('/', middleware.isStaff, (req, res) => {
    //Get Data from Form and Add To DB
    var title = req.body.title;
    var description = req.body.description;
    var city = req.body.city;
    var duration = req.body.duration;
    var address = req.body.address;
    var date = req.body.date;
    var author = {
        id: req.user._id
    };
    var newOpportunity = {
        title: title,  
        description: description,
        city: city,
        address: address,
        duration: duration,
        date: date, 
        author:author
    };
    //Add To DB
    Opportunity.create(newOpportunity, function (err, opportunity){
        if(err) {
            //Handle error
            res.redirect('/opportunity');
        } else {
            console.log('Added to DB');
            //Redirect to Opportunities
            res.redirect('/opportunity');
        }
    });
});
//SHOW ROUTE
Router.get('/:id', (req, res) => {
    //Find Campground by ID
    Opportunity.findById(req.params.id).populate('applications').exec(function (err, opportunity){
        if(!err) {
            //Render the Templates
            res.render('opportunity/show', {opportunity:opportunity});
        }
    });
});
//EDIT ROUTE
Router.get('/:id/edit', middleware.checkOpportunityOwnership, (req, res) => {
    Opportunity.findById(req.params.id, function (err, opportunity){
        if(!err) {
            //Render the Templates
            res.render('opportunity/edit', {opportunity:opportunity});
        }
    });
});
//UPDATE ROUTE
Router.put('/:id/edit', middleware.checkOpportunityOwnership, (req, res) => {
    Opportunity.findByIdAndUpdate(req.params.id, req.body.opportunity, function (err, opportunity){
        if(!err) {
            res.redirect('/opportunity/' + req.params.id);
        }
    });
});
//DESTROY ROUTE
Router.delete('/:id', middleware.checkOpportunityOwnership, (req, res) => {
    Opportunity.findByIdAndRemove(req.params.id, function(err){
        if(!err) {
            res.redirect('/opportunity');
        }
    });
});

>>>>>>> 155441e18bdbfcc2fd483b73e65bbfda087dc39d
module.exports = Router;