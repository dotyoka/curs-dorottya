"use strict"

const ENV = process.env.NODE_ENV || 'development';
//console.log('process.env.NODE_ENV',process.env.NODE_ENV);
//console.log('ENV',ENV);
const config = require(`./environments/${ENV}`);

//console.log('CONFIG FROM ENVIRONMENT', config)

module.exports = config;