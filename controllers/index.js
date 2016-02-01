var list = require('./data');
var express = require('express');

var articleList = list.getJsonArticles();
var indexRouter = express.Router();

// Main router on startup
indexRouter.get('/', function (req, res) {
	var articleLength = articleList.length;
	var slicedList = articleList.slice(0,10);
	res.render('layout', {list: slicedList, amounts:articleLength});
});

// API router :: grabs articles with specific params + if sort
indexRouter.get('/api/articles/:start/:end', function(req, res, next) {
	var sort = req.query.sort;
	var direction = req.query.direction;
	var itemList = {};

	// check if sort exists
	if (sort === 'true'){
		// sort
		var sortedList = articleList.sort(function(a, b) {
			// check for direction of sort
			if (direction === 'asc'){
				return a.words - b.words;
			} else {
				return b.words - a.words;
			}
		});
		itemList['data'] = sortedList.slice(req.params.start, req.params.end);
	} else {
		itemList['data'] = articleList.slice(req.params.start, req.params.end);
	}
	res.json(itemList);
});

module.exports = indexRouter;