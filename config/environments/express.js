"use strict"

const bodyParser = require('body-parser')
const methodOverride = require('method-override')

module.exports = {
    initExpress: initExpress
}

function initExpress(app) {
    // other setups

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(methodOverride())

    app.use(function(req, res, next) {
        console.log('general midd')
        req.resources = req.resources || {};
        next();
    })
}
