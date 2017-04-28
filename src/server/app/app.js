//IMPORTS//
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();


//=====================================//
//============MIDDLEWARE===============//
//=====================================//

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//=====================================//
//==============ROUTES=================//
//=====================================//

//Serve Main Page
app.get('/', function(req, res, next){
	res.send('Hello From The Server!');
});


//=====================================//
//==============ERROR==================//
//=====================================//

//Run Server Error
app.use(function(err, req, res, next) {
    console.log('Error!');
});


//=====================================//
//===========LISTENER==================//
//=====================================//

//Listen on Port
app.listen(3000, function () {
    console.log('Server running on localhost:3000');
});

module.exports = app;