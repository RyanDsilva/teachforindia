<<<<<<< HEAD
const express = require('express');
var Router  = express.Router({mergeParams: true});
var User = require('../models/user');
var ejs = require('ejs');
var Opportunity = require('../models/opportunity');
var Application = require('../models/application');
var middleware = require("../middleware");
var transporter = require('../middleware/mailer');

//INDEX

//NEW ROUTE
Router.get('/application/new', middleware.isLoggedIn, (req, res) => {
    Opportunity.findById(req.params.id, function (err, opportunity) {
        if (!err) {
            res.render('application/new', {opportunity: opportunity});
        }
    });
});
//CREATE ROUTE
Router.post('/application', middleware.isLoggedIn, (req, res) => {
    Opportunity.findById(req.params.id, function (err, opportunity) {
        if (!err) {
            Application.create(req.body.application, function (err, application) {
                if (!err) {
                    application.author.id = req.user._id;
                    application.author.name = req.user.name;
                    application.save();
                    opportunity.applications.push(application);
                    opportunity.save();
                    User.findById(opportunity.author.id, function(err, user){
                        ejs.renderFile('views/email.ejs', {application:application}, function (err,data){
                            if (!err) {
                                console.log(data);
                                transporter.sendMail({
                                    from: 'teachforindiaryan@gmail.com', // sender address
                                    to: user.email, // list of receivers
                                    subject: 'Volunteer Has Signed Up', // Subject line
                                    html: data //text body
                                  }, function (err, info) {
                                    if(!err){
                                        console.log('Mail Sent!');
                                        console.log(info);
                                    }
                                 });
                            } else {
                                console.log(err);
                            }
                        });
                    });
                    res.redirect('/opportunity/' + opportunity._id);
                }
            });
        }
    });
});
//EDIT ROUTE
//TODO=>

//UPDATE ROUTE
//TODO=>

//DESTROY ROUTE
Router.delete('/application/:app_id', middleware.checkApplicationOwnership, (req, res) => {
    Opportunity.findById(req.params.id, function (err, opportunity) {
        if (!err) {
            Application.findByIdAndRemove(req.params.cid, function (err) {
                if (!err) {
                    res.redirect('/opportunity/' + opportunity._id);
                }
            });
        }
    });
});

=======
const express = require('express');
var Router  = express.Router({mergeParams: true});
var User = require('../models/user');
var Opportunity = require('../models/opportunity');
var Application = require('../models/application');
var middleware = require("../middleware");

//INDEX

//NEW ROUTE
Router.get('/application/new', middleware.isLoggedIn, (req, res) => {
    Opportunity.findById(req.params.id, function (err, opportunity) {
        if (!err) {
            res.render('application/new', {opportunity: opportunity});
        }
    });
});
//CREATE ROUTE
Router.post('/application', middleware.isLoggedIn, (req, res) => {
    Opportunity.findById(req.params.id, function (err, opportunity) {
        if (!err) {
            Application.create(req.body.application, function (err, application) {
                if (!err) {
                    application.author.id = req.user._id;
                    application.author.name = req.user.name;
                    application.save();
                    opportunity.applications.push(application);
                    opportunity.save();
                    res.redirect('/opportunity/' + opportunity._id);
                }
            });
        }
    });
});
//EDIT ROUTE
//TODO=>

//UPDATE ROUTE
//TODO=>

//DESTROY ROUTE
Router.delete('/application/:app_id', middleware.checkApplicationOwnership, (req, res) => {
    Opportunity.findById(req.params.id, function (err, opportunity) {
        if (!err) {
            Application.findByIdAndRemove(req.params.cid, function (err) {
                if (!err) {
                    res.redirect('/opportunity/' + opportunity._id);
                }
            });
        }
    });
});

>>>>>>> 155441e18bdbfcc2fd483b73e65bbfda087dc39d
module.exports = Router;