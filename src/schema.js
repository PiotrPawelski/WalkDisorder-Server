'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = mongoose.Schema({ 

	date 			: Date,
	x				: Number,
	y				: Number,
	z				: Number

}, {
    versionKey: false 
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test');

module.exports = mongoose.model('data', dataSchema);