var firebase = require('firebase');
var admin = require('firebase-admin');
var path = require('path');
var CONFIG = require(path.resolve('..','..','config','database-config.json'));
require('firebase/auth');
require('firebase/database');

// try{
// 	firebase.initializeApp({
// 	  serviceAccount: path.resolve('..','..','config','database-config.json'),	
// 	  databaseURL: "https://techblog-4cede.firebaseio.com"
// 	});
// } catch(err) {
// 	console.log("Could not initialize database.");
// 	console.log(err);
// }

// try {
// 	firebase.initializeApp({
//     apiKey: "AIzaSyBzbCzaaiiwYmzN1Gt8P_iNl-qvzIy0Xzk",
//     authDomain: "techblog-4cede.firebaseapp.com",
//     databaseURL: "https://techblog-4cede.firebaseio.com",
//     projectId: "techblog-4cede",
//     storageBucket: "techblog-4cede.appspot.com",
//     messagingSenderId: "649580246596"
// 	});
// } catch(err) {
// 		console.log("Could not initialize database.");
// 		console.log(err);
// }

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



