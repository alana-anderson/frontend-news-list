var list = require('./data');
var url = require('url');
var jsonData = require('../public/resources/articles.json');
var indexRouter = require('../routes');

var articleList = list.articles;


exports.index = function (req, res) {
	res.render('layout', {list: articleList});
};

/*indexRouter.get('/:start/:end', function(req, res, next) {
  var itemList = {};
  itemList['data'] = jsonData.data.slice(req.params.start, req.params.end);
  res.json(itemList);
});
*/ // see about this tomorrow