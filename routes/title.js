var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ineedatitle');
var db = mongoose.connection;

db.on('error', function(msg){
	console.log("Mongoose: Unable to connect to database");
});

db.once('open', function(){
	console.log("Mongoose connected to library datatbase.");
});

var Titles = require('../models/ineedatitle');

/* GET users listing. */
router.get('/list', function(req, res){
	Titles.find({}).exec(function(err, titles){
		if(err){
			console.log("Error getting titles from library");
		} else {
			res.json(titles);
		}
	});
});

module.exports = router;

