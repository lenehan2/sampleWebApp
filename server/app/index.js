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
    app.use(express.static('fb_files'));
    app.engine('handlebars',hbs.engine);
    app.set('view engine','handlebars');
    app.set('views','server/app/views');
    app.get('/', function (req, res) {
        res.render('home');
    }); 
    app.use('/articles',require('./routes/articles')); 
    app.use('/fb_tags',require('./routes/fb_tags')); 
    app.use('/delay',require('./routes/tags_delayed')); 
    app.get('/ten_reasons_brian_is_lame', function (req, res) {
        res.render('clickbait');
    }); 
    app.get('/*', function (req, res) {
        res.render('404');
    }); 
    app.use(function (err, req, res, next) {
        console.error(err);
        console.error(err.stack);
        res.status(err.status || 500).send(err.message || 'Internal server error.');
    });

    return app; 
};

