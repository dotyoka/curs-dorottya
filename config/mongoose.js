"use strict"

const mongoose = require('mongoose');

module.exports = 
{
	initMongoose:initMongoose
}

function initMongoose()
{
	mongoose.connect(
        'mongodb://localhost:27017/curs',{
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log('DB Connection Successfull'))
    .catch((err) => {
        console.error(err);
    });

	
	const db = mongoose.connection;
	
	db.on('error', function(err)
	{
		console.log('err', err)
	})
	
	db.once('open',function(){
		console.log('open','conected to mongodb')
	})
	
	process.on("SIGINT", cleanup);
	process.on("SIGTERM", cleanup);
	process.on("SIGHUP", cleanup);
}

function cleanup() {
		mongoose.connection.close(() => {
		process.exit();
	});
}