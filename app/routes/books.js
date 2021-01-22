"use strict"

const express = require('express');
const router = express.Router();


const bookCtrl = require('../controllers/books')

const authCtrl = require('../controllers/auth')

const helperCtrl = require('../helpers')


router.get('/books', 
bookCtrl.getBooks,
helperCtrl.responseToJson('books') 

);

router.get('/books/:bookId', 
bookCtrl.getBooksbyId,
helperCtrl.responseToJson('books')
);  


router.post('/books', 
authCtrl.isAdmin,
bookCtrl.createBook,
); 

 

module.exports = router;