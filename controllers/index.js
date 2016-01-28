var list = require('./data');
var express = require('express');

var articleList = list.articles;
var indexRouter = express.Router();

indexRouter.get('/', function (req, res) {
	var articleLength = articleList.length;
	var slicedList = articleList.slice(0,10); // initally show 10
	res.render('layout', {list: slicedList, amounts:articleLength});
});

indexRouter.get('/api/articles/:start/:end', function(req, res, next) {
	var itemList = {};
	itemList['data'] = articleList.slice(req.params.start, req.params.end);
	res.json(itemList);
});

module.exports = indexRouter;