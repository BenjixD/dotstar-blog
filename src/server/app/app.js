//IMPORTS//
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var client = path.resolve('..','..','client','public');	//Path to client public folder
var firebase = require(path.resolve('database','firebase.js'));
var Cosmic = require('cosmicjs');

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

//Serve Game Page
app.get('/game', function(req, res, next){
	res.sendFile(path.join(client,'html','game.html'));
});

//Serve Main Page
app.get('/', function(req, res, next){
	res.sendFile(path.join(client,'html','index.html'));
});

//Blog Pages
var routes = require(path.resolve('routes','posts.js'));
app.use('/', routes);

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