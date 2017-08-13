var path = require('path');
var async = require('async');
var cosmicConfig = require('../../../config/cosmic-config.json');

module.exports = function(firebase, cosmic){
	var express = require('express');
	var router = express.Router();

	router.get('/posts/:slug', function(req, res, next) {
		async.waterfall([
			//Get slug from firebase
			function querySlug(callback){
				var slugValue = null;
					firebase.database().ref('/posts/' + req.params.slug).once('value').then(function(snapshot){
						slugValue = snapshot.val().slug;
						callback(null, slugValue);
					});		
			}, 
			//Get Content from Cosmic
			function getCosmicBucket(slug, callback){
				var params = {
					slug: slug
				};

				var config = {};
				config.bucket = cosmicConfig;
				cosmic.getObject(config, params, function(err, res){
					callback(null, res);
				});
			}], 
			function(err, post){
				if(err){
					console.log("REKT");
				}
				console.log(post.object.content);
				res.send("<html><body>" + post.object.content + "</body></html>");
				res.end();
		});
	});

	return router;
}

