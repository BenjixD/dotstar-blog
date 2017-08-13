var firebase = require('firebase');
var path = require('path');
var CONFIG = require(path.resolve('..','..','config','database-config.json'));
require('firebase/auth');
require('firebase/database');

//Initalize firebase app
try {
	firebase.initializeApp(CONFIG.config);
} catch(err) {
	console.log("Could not initialize database.");
}

/*
//Sign-in with server user
firebase.auth().signInWithEmailAndPassword(CONFIG.user.email, CONFIG.user.password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log("Could not authenticate " + CONFIG.user.email);
});
*/
module.exports = {
	firebase: firebase
};



