'use strict';
const router = require('express').Router(); // eslint-disable-line new-cap
const path = require('path');
const articles = require('../../static/articles.js');
module.exports = router;

router.get('/', function (req, res) { 
  res.render('articles/base');
});

router.get('/:article', function (req, res) { 
    var name = req.params.article;
    var article = articles[name]; 
    if(article){
      res.render('articles/article',article);
    }else{ 
      res.render('articles/article',{content: 'No article'});
    }
});
// Make sure this is after all of
// the registered routes!
router.use(function (req, res, next) {
    var err = new Error('Not found.');
    err.status = 404;
    next(err);
});
