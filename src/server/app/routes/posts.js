var path = require('path');
var async = require('async');
var cosmicConfig = require('../../../config/cosmic-config.json')

module.exports = function(firebase, cosmic){
	var express = require('express');
	var router = express.Router();

	router.get('/posts/:slug', function(req, res, next) {
		async.waterfall([
			function querySlug(callback){
				var slugValue = null;
				firebase.database().ref('/posts' + req.params.slug).once('value').then(function(snapshot){
					slugValue = snapshot.val().slug;
				});
				callback(null, slugValue);
			}, function getCosmicBucket(callback, slug){
				var params = {
					slug: slug
				}
				cosmic.getObject(cosmicConfig, params, function(err, res){
					res.send(res.content);
				});
			}], 
			function(err){
				if(err){
					console.log("REKT");
				}
		});
		console.log(req.params.slug);
		res.end();
	});

	return router;
}

