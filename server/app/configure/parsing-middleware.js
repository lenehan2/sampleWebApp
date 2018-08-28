'use strict';
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSanitizer = require('express-sanitizer');

module.exports = function (app) {
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(expressSanitizer());
    app.use(bodyParser.urlencoded({ extended: true }));
};
