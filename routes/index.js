<<<<<<< HEAD
const express = require('express');
const Router = express.Router();
var User = require('../models/user');
const passport = require('passport');
var middleware = require("../middleware");

Router.get('/', (req, res) => {
    res.render('landing');
});

Router.get('/register', (req, res) => {
    res.render('register');
});

Router.post('/register', (req, res) => {
    var newUser = new User({username:req.body.username});
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.phone = req.body.phone;
    newUser.userType = req.body.userType;
    User.register(newUser, req.body.password, function (err, user){
        if(!err) {
            passport.authenticate('local')(req, res, function (){
                console.log(user);
                res.redirect('/opportunity');
            });
        }
    });
});

Router.get('/login', (req, res) => {
    res.render('login');
});

Router.post('/login', passport.authenticate('local', {
    successRedirect: '/opportunity',
    failureRedirect: '/login',
    failureFlash: true
    }), function (req, res){
    
});

Router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

Router.get('*', (req, res) => {
    res.render('error');
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

=======
const express = require('express');
const Router = express.Router();
var User = require('../models/user');
const passport = require('passport');
var middleware = require("../middleware");

Router.get('/', (req, res) => {
    res.render('landing');
});

Router.get('/register', (req, res) => {
    res.render('register');
});

Router.post('/register', (req, res) => {
    var newUser = new User({username:req.body.username});
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.phone = req.body.phone;
    newUser.userType = req.body.userType;
    User.register(newUser, req.body.password, function (err, user){
        if(!err) {
            passport.authenticate('local')(req, res, function (){
                console.log(user);
                res.redirect('/opportunity');
            });
        }
    });
});

Router.get('/login', (req, res) => {
    res.render('login');
});

Router.post('/login', passport.authenticate('local', {
    successRedirect: '/opportunity',
    failureRedirect: '/login',
    failureFlash: true
    }), function (req, res){
    
});

Router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

Router.get('*', (req, res) => {
    res.render('error');
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

>>>>>>> 155441e18bdbfcc2fd483b73e65bbfda087dc39d
module.exports = Router;