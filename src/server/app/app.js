//IMPORTS//
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var client = path.resolve('..','..','client');	//Path to client folder 


//=====================================//
//============MIDDLEWARE===============//
//=====================================//

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(client));	//Express to Serve Public Content


//=====================================//
//==============ROUTES=================//
//=====================================//

//Serve Main Page
app.get('/', function(req, res, next){
	res.sendFile(path.join(client, 'index.html'));
});


//=====================================//
//==============ERROR==================//
//=====================================//

//Run Server Error
app.use(function(err, req, res, next) {
  //Error Handler Here
  next();
});

app.get('*', function(req, res, next){
	res.status(404).end();
});


//=====================================//
//===========LISTENER==================//
//=====================================//

//Listen on Port
app.listen(3000, function () {
    console.log('Server running on localhost:3000');
});

module.exports = app;