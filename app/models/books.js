"use strict"

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const bookSchema = new Schema({
	createdAt: Number,
	updatedAt: Number,
	name: {
		type: String,
		required: true,
		unique: true
	},
	title: {
		type: String,
		required: true,
		unique: false
	},
	publisher: {
		type: String,
		required: true,
		unique: false
	},
	userId:
	{
		type:ObjectId,
		required: true,
		unique: false,
		ref:'user'
	}
	
},{timestamps:{currentTime: () => new Date().getTime()} })

module.exports = mongoose.model('book',bookSchema,'books');	