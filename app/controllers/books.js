"use strict"

const mongoose = require('mongoose');
const Book = require('../models/books');


//pentru carte

function getBooksbyId(req, res, next)
{
	console.log('params',req.params)
	const {bookId} = req.params;
	Book.findById({_id: bookId}, function(err, result){
		/* if(err){
			console.log('err',err)
			return res.status(404).json(err); // afis erroare
		} */
		if(err) {
            console.log('err222', err)
            return next(err)
        }
		req.resources.books = result;
		return next();
	})
}



function getBooks(req, res, next)
{
	Book
	.find()
	.populate('userId','email name')
	.exec(function(err, result){
		/* if(err){
			console.log('err',err)
			return res.status(404).json(err); // afis erroare
		} */
		if(err) {
            console.log('err222', err)
            return next(err)
        }
		//console.log('result', result);
		//return res.json(result);
		req.resources.books = result;
		return next();
	})
}

function createBook(req,res,next)
{
	console.log('reg body', req.body);
	const book = new Book(req.body);
	
	book.save(function(err, result) { // prima data este eroare si dupa este rezultatul
		/* if(err){
			console.log('err',err)
			return res.status(404).json(err); // afis erroare
		} */
		if(err) {
            console.log('err222', err)
            return next(err)
        }
		/* console.log('result', result);
		return res.json(result); */
		req.resources.books = result;
		return next();
	})
	
	//console.log('user', user);
	//return res.json(user);
	
}

module.exports =
{
	getBooksbyId: getBooksbyId,
	getBooks:getBooks,
	createBook:createBook
}