var list = require('./data');
var articleList = list.articles;

exports.index = function (req, res) {
  res.render('index', {list: articleList});
};
