"use strict"

const mongoose = require('mongoose');
const User = require('../models/users');


const mid11 = (req, res, next) => {
  console.log("get users midd 1 ", req.body,req.query);
  return next();
};

const mid22 = (req, res, next) => {
  return res.json({ text: "POST call midd 2" });
};

const mid33 = (req, res, next) => {
  return res.json({ text: "PUT call" });
};

function deleteUsersbyId(req,res,next)
{
	const {userId} = req.params;
	User.deleteOne({_id:userId}, function(err,result){
		if(err) {
            console.log('err222', err)
            return next(err)
        }
		return next();
	})
}
function getUsersbyId(req, res, next)
{
	console.log('params',req.params)
	const {userId} = req.params;
	User.findById({_id: userId}, function(err, result){
		/* if(err){
			console.log('err',err)
			return res.status(404).json(err); // afis erroare
		} */
		if(err) {
            console.log('err222', err)
            return next(err)
        }
		req.resources.users = result;
		return next();
	})
}



function getUsers(req, res, next)
{
	User.find(function(err, result){
		/* if(err){
			console.log('err',err)
			return res.status(404).json(err); // afis erroare
		} */
		if(err) {
            console.log('err222', err)
            return next(err)
        }
		req.resources.users = result;
		return next();
	})
}

function createUser(req,res,next)
{
	console.log('reg body', req.body);
	const user = new User(req.body);
	
	if(user?.name?.lenght<3){
		return next({message: 'Lenght validation failed'})
	}
	
	user.save(function(err, result) { // prima data este eroare si dupa este rezultatul
		/* if(err){
			console.log('err',err)
			return res.status(404).json(err); // afis erroare
		} */
		if(err) {
            console.log('err222', err)
            return next(err)
        }
		
		req.resources.users = result;
		return next();
	})
}


module.exports =
{
	mid11:mid11,
	mid22:mid22,
	mid33:mid33,
	createUser: createUser,
	getUsers:getUsers,
	getUsersbyId:getUsersbyId,
	deleteUsersbyId:deleteUsersbyId
}