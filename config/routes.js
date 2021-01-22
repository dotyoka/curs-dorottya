"use strict"

const path = require('path');

module.exports =
{
	initRoutes:initRoutes,
}
function initRoutes(app)
{
	console.log('__dirname',__dirname);
	const routesPath = path.join(__dirname,'../app/routes');
	const routes = ['users','books'];
	
	routes.forEach(function(route)
	{
		const finalPath =`${routesPath}/${route}`;
		console.log("route", route);
		console.log("finalPath", finalPath);
		app.use(require(finalPath));
	})
	
}