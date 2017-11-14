'use strict';
const chalk = require('chalk');
const Promise = require('bluebird'); 

var server = require('http').createServer();

var createApplication = function () {
    var app = require('./app')();
    return server.on('request', app); // Attach the Express application.
};

var startServer = function () {

    var PORT = process.env.PORT || 1234;

    server.listen(PORT, function () {
        console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
    });

};

createApplication();
startServer();
