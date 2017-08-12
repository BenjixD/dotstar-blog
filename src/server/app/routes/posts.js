var express = require('express');
var path = require('path');
var async = require('async');
var router = express.Router();

router.get('/posts/:slug', function(req, res, next) {
	console.log(req.params.slug);
	res.end();
});

module.exports = router;