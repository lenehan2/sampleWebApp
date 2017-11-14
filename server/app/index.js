'use strict';
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const hbs = exphbs.create({
  defaultLayout: 'main',
  layoutsDir:'server/app/views',
  helpers: {
    join: function(context, block) {
       return context.join(',');
    }, 
  }
})

module.exports = function () {

    require('./configure')(app); 

    app.use(express.static('public'));
    app.engine('handlebars',hbs.engine);
    app.set('view engine','handlebars');
    app.set('views','server/app/views');
    app.get('/', function (req, res) {
        res.render('home');
    }); 
    app.use('/articles',require('./routes'));
    app.use(function (req, res, next) {
        var err;
        if (path.extname(req.path).length > 0) {
            err = new Error('Not found.');
            err.status = 404;
            next(err);
        } else {
            next();
        }
    });

    app.get('/*', function (req, res) {
        res.sendFile(app.get('filePath404'));
    }); 
    app.use(function (err, req, res, next) {
        console.error(err);
        console.error(err.stack);
        res.status(err.status || 500).send(err.message || 'Internal server error.');
    });

    return app; 
};

