var article = require('../models/article');
var jsonData = require('../public/resources/articles.json');

var articles = [];

// get article list
function getJsonArticles() {
	var articleData = JSON.parse(jsonData);
	articleData.data.children.forEach(function(child) {
		// check if belongs to mechmarket selling
			var title = child.data.title,
			image = child.data.image,
			url = child.data.url,
			publish_at = child.data.publish_at,
			profile =  child.data.profile,
			words = child.data.words;

			// push new item into array 
			var item = new article(title, image, url, publish_at, profile, words);
			articles.push(item);
			//console.log(item);
	});
}

// invoke
getJsonArticles();

// send article list
module.exports = {articles: articles};