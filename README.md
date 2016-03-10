# frontend-news-list
Frontend developer competency test. This will be a function single-page app where the user will retrieve all articles and display in table format.

## To build the project
run the following commands:
```
npm install
npm install -g bower
bower install
```

## To run
run the following commands:
```
gulp
node app.js
```
Server will look to :
```
127.0.0.1:3000
```

## Tools / Plugins / Libraries
- [Gulp](http://gulpjs.com/)
- [Bower](http://bower.io)
- [Express](http://expressjs.com/)
- [JSHint](https://www.npmjs.com/package/gulp-jshint)
- [Yeoman](http://yeoman.io/)
- [EJS](http://ejs.co/)
- [Moment](http://momentjs.com/)
- [LESS](http://lesscss.org/)
- [Bootstrap](http://getbootstrap.com/)

## Known Issues
~~Table sort sometimes prevents load more draw on windows~~ (Status: FIXED) [831448b](https://github.com/alanatreimanis/frontend-test-private/commit/831448b3ce357828453d6482c1e642e499c0d0ac#diff-4c5cecd37e3839c3b5d3dbcad3cbbd7f)

Camel casing ignored to ahere to json naming conventions
