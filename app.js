var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var moment = require('moment');
// var session = require('express-session');

var expressValidator = require('express-validator');
//Commented Down the Flash Message Code
var cookieParser = require('cookie-parser');
// var flash = require("connect-flash");


/*Routes */
var page=require('./routes/login');
var test = require('./routes/test');
var table = require('./routes/table');



app.set('view engine','ejs');

app.listen('7000',function(){
    console.log("server started at port 7000");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '10mb', extended:false}));

app.use(expressValidator());
app.use(cookieParser());
// app.use(flash());


// app.use(function ( req,res,next){
//     res.locals.success_msg = req.flash('success_msg');
//     res.locals.error_msg = req.flash('error_msg');
//     res.locals.error = req.flash('error');
//     res.locals.success=req.flash('success');
//     res.locals.successrem=req.flash('successrem');
//     res.locals.successpass=req.flash('successpass');
//     res.locals.generationsuccess_msg=req.flash('generationsuccess_msg');
//     next();

// });

// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true }
//   }))

//Flash Message
// app.use(flash());
// app.use(session({secret: 'keyboard cat', cookie:{maxAge:60000}}))
//  app.use( database);
app.use('/login',page);
app.use('/test', test);
app.use('/table',table);
app.use('./reportHub', reportHub);

app.get('/',function(req,res){
    res.render('login');
    
    
});
app.get('/test',function(req,res){
    res.render('test');
    
    
});
app.get('/table/table',function(req,res){
    res.render('table');
    
    
});





module.exports=app;



