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
    var name = req.sanitize(req.params.article);
    var article = articles[name] || articles.article1; 

    var articleCopy = JSON.parse(JSON.stringify(article));
    articleCopy.layout = 'tagsdelay';
    articleCopy.articleId = name;
    setTimeout(function(){
        res.render('articles/article',articleCopy);
    },8000);
});
// Make sure this is after all of
// the registered routes!
router.use(function (req, res, next) {
    var err = new Error('Not found.');
    err.status = 404;
    next(err);
});
