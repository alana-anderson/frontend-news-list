var list = require('./data');
var jsonData = require('../public/resources/articles.json');
var express = require('express');

var articleList = list.articles;
var indexRouter = express.Router();

indexRouter.get('/', function (req, res) {
	var articleLength = articleList.length;
	res.render('layout', {list: articleList, amounts:articleLength});
});

indexRouter.get('/:start/:end', function(req, res, next) {
	var itemList = {};
	itemList['data'] = jsonData.data.slice(req.params.start, req.params.end);
	res.json(itemList);
});

module.exports = indexRouter;