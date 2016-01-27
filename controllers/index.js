var list = require('./data');
var jsonData = require('../public/resources/articles.json');
var express = require('express');

var articleList = list.articles;
var indexRouter = express.Router();

indexRouter.get('/', function (req, res) {
	var articleLength = articleList.length;
	// initially show 10
	slicedList = articleList.slice(0,10);
	res.render('layout', {list: slicedList, amounts:articleLength});
});

indexRouter.get('/api/articles/:start/:end', function(req, res, next) {
	var itemList = {};
	itemList['data'] = jsonData.slice(req.params.start, req.params.end);
	res.json(itemList);
});

module.exports = indexRouter;