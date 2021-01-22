"use strict"

module.exports = {
	isAdmin:isAdmin
}

const userIsAdmin  = true;


function isAdmin(req,res,next)
{
	if(userIsAdmin)
	{
		return next();
	}
	return res.send("Neauth");
}