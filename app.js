var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressValidator = require('express-validator')
var cookieParser = require('cookie-parser');
/*
body parser passes the body parse the json files
*/

app.set('view engine','ejs');

app.listen('7000',function(){
    console.log("server started at port 7000");
})

var page=require('./routes/login');
var test = require('./routes/test');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({limit : '10mb',extended:false}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '10mb', extended:false}));

app.use(expressValidator());
app.use(cookieParser());
app.use('/login',page)
app.use('/test', test);
app.get('/',function(req,res){
    res.render('login');
    
});
app.get('/test', function(req,res){
    
    var jsonData = [{"id":"5cafbc87fc650b18b11f5d2e","name":"Wasabi Restaurant Sushi Bar","cuisine":"Sushi and Japanese","location":"77 Dorset Street Upper, Inns Quay, Dublin,","latitude":"53.357055","longitude":"-6.264307","allergies":"Fish Alcohol and Milk","calories":"150 - 1000","nutrition":"high protien, high calcium","__v":0},{"_id":"5cafbd2dfc650b18b11f5d2f","name":"Subway","cuisine":"Burgers,American","location":"5 Cecilia Street, Dublin","latitude":"53.349454","longitude":"-6.244527","allergies":"Gluten and Pork","calories":"295 - 504","nutrition":"high protien, moderate fats","__v":0},{"_id":"5cafbd82fc650b18b11f5d30","name":"Five Guys","cuisine":"Burgers, American and Milkshakes","location":"57 South Great George's Street, Dublin 2, Dublin","latitude":"53.342129","longitude":"-6.265041","allergies":"Gluten,sessame Seeds and Milk","calories":"300 - 684","nutrition":"high fibre , high sugar","__v":0},{"_id":"5cafbdebfc650b18b11f5d31","name":"Mcdonalds","cuisine":"American, Burgers and Drinks","location":"Dublin 1","latitude":"53.350277","longitude":"-6.260889","allergies":"gluten,fish, Milk","calories":"90 - 630","nutrition":"high cholestrol, high fat","__v":0},{"_id":"5cafbe5afc650b18b11f5d32","name":"Jimmy Chung","cuisine":"Japanese,Chinese","location":"8 Eden Quay","latitude":"53.348376","longitude":"-6.258416","allergies":"Gluten,Pork and Alcohol","calories":"110 - 640","nutrition":"high protien, high fibre","__v":0},{"_id":"5cafbefcfc650b18b11f5d33","name":"Supermac's","cuisine":"Burgers American Meal Deals","location":"45 O'Connell Street Lower, Dublin","latitude":"53.344967","longitude":"-6.264118","allergies":"Gluten and Milk","calories":"103 - 520","nutrition":"high sodium, high fats","__v":0},{"_id":"5cafbf3ffc650b18b11f5d34","name":"Sbarro New York Pizza","cuisine":"Pizza, American, Italian Meal Deals","location":"Ilac Centre, Dublin","latitude":"53.348248","longitude":"-6.265566","allergies":"Gluten and Pork","calories":"240 - 970","nutrition":"high sodium, moderate fibre","__v":0},{"_id":"5cafbfa6fc650b18b11f5d35","name":"KFC","cuisine":"AmericanBurgersFried chicken","location":"Retail Unit 1, Greeg Court, Parnell Street, Dublin","latitude":"53.346328","longitude":"-6.259449","allergies":"Gluten and Sesame Seeds Present","calories":"140 - 650","nutrition":"high cholestrol, high fats, high protien","__v":0},{"_id":"5cafbff3fc650b18b11f5d36","name":"SuperSubs","cuisine":"Salads and Sandwiches, Breakfast","location":"O'Connell Street Lower, Dublin","latitude":"53.351411","longitude":"-6.261477","allergies":"Gluten Free Options Available","calories":"84 - 540","nutrition":"high fibre, high protien","__v":0},{"_id":"5cafc05ffc650b18b11f5d37","name":"Chick'n Lick'n","cuisine":"Burgers, Chicken and Halal","location":"27 Liffey Street Lower North City, Dublin 1, Dublin","latitude":"53.347499","longitude":"-6.263558","allergies":"gluten and fish","calories":"200 - 825","nutrition":"high fats, high sodium","__v":0},{"_id":"5cafc0dbfc650b18b11f5d38","name":"My Meat Wagon","cuisine":"BBQ, American","location":"Smithfield Market Square, Smithfield, Dublin 7, Dublin,","latitude":"53.349066","longitude":"-6.278906","allergies":"gluten,fish, Sesame Seeds and Alcohol","calories":"250 - 1050","nutrition":"high protien , low sodium","__v":0},{"_id":"5cafc18afc650b18b11f5d39","name":"Supermac's","cuisine":"Burgers, AmericanMeal Deals","location":"Temple Bar Dublin 1","latitude":"53.345069","longitude":"-6.264139","allergies":"gluten,fish, Milk","calories":"220 - 800","nutrition":"high sodium, high fats","__v":0},{"_id":"5cafc241fc650b18b11f5d3a","name":"Rocket's","cuisine":"Burgers American and Dessert","location":"Temple Bar Dublin 1","latitude":"53.344527","longitude":"-6.266482","allergies":"peanuts, fish, milk and Gluten","calories":"170 - 620","nutrition":"moderate fats, high cholestrol","__v":0},{"_id":"5cafc28dfc650b18b11f5d3b","name":"Eddie Rocket's Diner","cuisine":"Burgers,American","location":"Parnel Street Dublin 1","latitude":"53.350535","longitude":"-6.267351","allergies":"peanuts, fish, milk and Gluten Present","calories":"320 - 990","nutrition":"high fibre, low sugar","__v":0},{"_id":"5cafc2d2fc650b18b11f5d3c","name":"Camden Rotisserie","cuisine":"American, Burgers,Chicken","location":"37 Camden Street, Dublin,","latitude":"53.334584","longitude":"-6.265077","allergies":"Gluten Free ,Egg Free","calories":"200 - 506","nutrition":"high fibre, high carbs, low sugar","__v":0},{"_id":"5cafc331fc650b18b11f5d3d","name":"Token","cuisine":"American,Burgers,Drinks","location":"Arran Quay","latitude":"53.334597","longitude":"-6.265088","allergies":"Gluten Free ,Peanut and Sesame Seeds Present","calories":"190  - 650","nutrition":"high cholestrol","__v":0},{"_id":"5cafc363fc650b18b11f5d3e","name":"Bobo's","cuisine":"American, Burgers,Chicken","location":"22 Wexford St, Dublin,","latitude":"53.336514","longitude":"-6.265743","allergies":"Gluten Sesame Seeds and Alcohol","calories":"165 - 615","nutrition":"high protien, low carbs","__v":0},{"_id":"5cafc39afc650b18b11f5d3f","name":"Gourmet Burger Kitchen (GBK)","cuisine":"Burgers,American","location":"Unit 1, Temple Bar Square, Temple Bar, Dublin 2, Dublin,","latitude":"53.345537","longitude":"-6.263244","allergies":"Wheat Gluten and Nuts","calories":"295 - 800","nutrition":"high fibre, high sodium","__v":0},{"_id":"5cafc3d7fc650b18b11f5d40","name":"Luigi Malones","cuisine":"American, Pizza","location":"dublin 2","latitude":"53.346562","longitude":"-6.263399","allergies":"Wheat,Gluten,Sesame Seeds and Milk","calories":"175 - 1250","nutrition":"high protien, High carbs","__v":0}];
    var jsonstringified = JSON.stringify(jsonData);
    //var jsonParsed = JSON.parse(jsonData);

    console.log("check1")
    console.log("data in json")
    res.render('test',{
        jsp:jsonstringified,
        jsondet:jsonData
        // listCount:listCount,headerList:0,rowCount:0,columnCount:0
    });
});

