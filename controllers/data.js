var article = require('../models/article');
var jsonData = require('../public/resources/articles.json');

var articles = [];

// get article list
function getJsonArticles() {
		jsonData.forEach(function(data){
		var title = data.title,
			image = data.image,
			url = data.url,
			publish_at = data.publish_at,
			profile =  data.profile,
			words = data.words;

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