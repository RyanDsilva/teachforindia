const express           = require('express');
const bodyParser        = require('body-parser');
const mongoose          = require('mongoose');
const passport          = require('passport');
var nodemailer          = require('nodemailer');
const methodOverride    = require('method-override');
const sanitizer         = require('express-sanitizer');
const flash             = require('connect-flash');
const cookieParser      = require('cookie-parser');
const OpportunityRoutes = require('./routes/opportunity');
const ApplicationRoutes = require('./routes/application');
const IndexRoutes       = require('./routes/index');
const LocalStrategy     = require('passport-local');
//const seedDB          = require('./seeds');

//APP SETUP
var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(sanitizer());
app.use(require("express-session")({
    secret: "Teach For India Pre Work Assignment",
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser('secret'));
app.use(methodOverride('_method'));

//DB SETUP
mongoose.connect(process.env.DATABASEURL);
//mongoose.connect("mongodb://localhost/teachforindia")
var Opportunity = require('./models/opportunity');
var Application = require('./models/application');
var User = require('./models/user');

//seedDB();

//PASSPORTJS AUTH SETUP
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//GLOBALS
app.use(function (req, res, next){
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

//ROUTES
app.use('/opportunity', OpportunityRoutes);
app.use('/opportunity/:id', ApplicationRoutes);
app.use(IndexRoutes);

//Listening
app.listen(process.env.PORT, process.env.IP, () => {
    console.log('Teach For India Server is running!');
});

/*app.listen(3000, () => {
    console.log('Teach For India Server is running on port 3000!');
});*/