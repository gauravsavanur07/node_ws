var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var expressValidator = require('express-validator');
//Commented Down the Flash Message Code
var cookieParser = require('cookie-parser');
// var flash = require('express-flash-messages');
// var session = require('express-session');


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

//Flash Message
// app.use(flash());
// app.use(session({secret: 'keyboard cat', cookie:{maxAge:60000}}))
//  app.use( database);
app.use('/login',page)
app.use('/test', test);
app.use('/table',table);

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



