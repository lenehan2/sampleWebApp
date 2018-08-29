'use strict';
const router = require('express').Router(); // eslint-disable-line new-cap
const path = require('path');
const articles = require('../../../static/articles.js');
module.exports = router;

router.get('/', function (req, res) { 
  res.render('articles/base');
});

//router.use(function(req,res,next){setTimeout(next,10000)});
router.get('/:article', function (req, res) { 
    res.render('articles/article',{layout: 'deeplinking'});
});
// Make sure this is after all of
// the registered routes!
router.use(function (req, res, next) {
    var err = new Error('Not found.');
    err.status = 404;
    next(err);
});
