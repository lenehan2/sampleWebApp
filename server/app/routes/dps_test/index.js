'use strict';
const router = require('express').Router(); // eslint-disable-line new-cap
const path = require('path');
const articles = require('../../../static/articles.js');
module.exports = router;

router.get('/*', function (req, res) { 
  res.render('articles/article',{layout: 'dps'})
});

