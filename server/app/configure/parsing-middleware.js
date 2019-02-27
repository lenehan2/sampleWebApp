'use strict';
var cookieParser = require('cookie-parser');
const useragent = require('express-useragent');
var bodyParser = require('body-parser');
var expressSanitizer = require('express-sanitizer');

module.exports = function (app) {
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(expressSanitizer());
    app.use(useragent.express());
    app.use(bodyParser.urlencoded({ extended: true }));
};
