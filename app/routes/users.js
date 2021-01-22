"use strict"

const express = require('express');
const router = express.Router();


// pot sa scot functiile si sa le pun separat
//pot fi mai multe midd in cadrul unei rute


const userCtrl = require('../controllers/users')

const authCtrl = require('../controllers/auth')

const helperCtrl = require('../helpers')


router.get('/users', 
//userCtrl.mid11, 
//userCtrl.mid22,
//userCtrl.mid33
userCtrl.getUsers,
helperCtrl.responseToJson('users') //este in loc de functia
/* function(req,res,next)
{
	console.log('req.resources.user',req.resources.users);
	return res.json(req.resources.users);
} */
);

router.get('/users/:userId', 
//userCtrl.mid11, 
//userCtrl.mid22,
//userCtrl.mid33
userCtrl.getUsersbyId,
helperCtrl.responseToJson('users')
/* function(req,res,next)
{
	console.log('req.resources.user',req.resources.users);
	return res.json(req.resources.users);
} */
);  

router.delete('/users/:userId',
userCtrl.getUsersbyId,
userCtrl.deleteUsersbyId,
helperCtrl.responseToJson('users')
/* function(req,res,next)
{
	console.log('req.resources.user',req.resources.users);
	return res.json(req.resources.users);
} */
);

router.post('/users', 
authCtrl.isAdmin,
//userCtrl.mid11,
userCtrl.createUser,
); 

router.put('/users', function(req, res, next)
{
	console.log('users route put');

	//res.send('Heloo');
	return res.json({test:'Hello PUT'});
}); 

module.exports = router;