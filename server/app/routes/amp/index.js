'use strict';
const router = require('express').Router(); // eslint-disable-line new-cap
const path = require('path');
const articles = require('../../../static/articles.js');
module.exports = router;

router.get('/', function (req, res) { 
  res.send('Amp base route');
});

//router.use(function(req,res,next){setTimeout(next,10000)});
router.get('/:article', function (req, res) { 
    var name = req.sanitize(req.params.article);
    let url = req.protocol + '://'+req.get('host') + req.originalUrl;
    if(url[url.length-1] !=='/') url+='/';
    console.log("FULL URL: "+url)
    res.render('articles/article',{...articles['article1'],article_name: name, full_url: url,layout: 'amp'});
});
router.get('/:article/amplink', function (req, res) { 
    var name = req.sanitize(req.params.article);
    let url = req.protocol + '://'+req.get('host') + req.originalUrl;
    if(url[url.length-1] !=='/') url+='/';
    console.log("FULL URL: "+url)
    res.render('articles/article',{...articles['article1'],article_name: name, full_url: url,layout: 'amp',isAmp: true});
});
// Make sure this is after all of
// the registered routes!
router.use(function (req, res, next) {
    var err = new Error('Not found.');
    err.status = 404;
    next(err);
});
