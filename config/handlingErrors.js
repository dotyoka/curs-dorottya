"use strict"

module.exports = {
    handlingError,
}

function handlingError(app) {
    app.use(function(err, req, res, next) {
        console.log('error middleware', err);

        return res.status(err.statusCode || 400).json({
            status: 'error',
            message: err && err.message || 'Default error message'
        })
    })
}

