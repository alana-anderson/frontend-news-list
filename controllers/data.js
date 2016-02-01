var article = require('../models/article');
var jsonData = require('../public/resources/articles.json');
var jsonMoreData = require('../public/resources/more-articles.json');
var moment = require('moment');

var jsonTotalData = jsonData.concat(jsonMoreData);

var articles = [];

var Data = {
	getJsonArticles: function() {
		var articles = [];
		jsonTotalData.forEach(function(data){
		var title = data.title,
			image = data.image,
			url = data.url,
			publish_at = moment(data.publish_at).fromNow(),
			profile =  data.profile,
			words = data.words;

			// push new item into array 
			var item = new article(title, image, url, publish_at, profile, words);
			articles.push(item);
			//console.log(item);
		});
		return articles;
	}
};

module.exports = Data;