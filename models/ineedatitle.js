var mongoose = require('mongoose');

var schema = mongoose.Schema({
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
	entered: {
		type: Date,
		default: Date.now,
		required: 'Must have start date - default value is the created date'
	}
});

var Titles = mongoose.model('titles', schema);

module.exports = Titles;
