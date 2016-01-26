// Articles
var article = function(title, image, url, publish_at, profile, words) {
	this.title = title;
	this.image = image;
	this.url = url;
	this.publish_at = publish_at;
	this.profile = profile;
	this.words = words;
};

module.exports = article;