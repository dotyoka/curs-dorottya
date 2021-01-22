"use strict"

const express = require('express');
const app = express();
const config = require('./config/index');

// init configs
require('./config/express').initExpress(app);
require('./config/routes').initRoutes(app);
require('./config/mongoose').initMongoose();
require("./config/finalRoute").finalRoute(app);
require("./config/errorHandling").errorHandling(app);
// end init configs


app.listen(config.PORT, function() {
    console.log(`App is running on port ${config.PORT}`)
});
