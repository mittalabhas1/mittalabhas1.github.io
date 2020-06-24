/* eslint no-console: 0 */
var path = require('path');
var express = require('express');
var forceDomain = require('forcedomain');

var port = process.env.PORT || 8081;
var app = express();

app.use(
  forceDomain({
    hostname: 'abhasmittal.com',
    protocol: 'https'
  })
);

app.use(express.static(path.join(__dirname, 'build'), { index: false }));

app.get('/*', function(req, res, next) {
  res.setHeader('Cache-Control', 'no-store');
  next();
});

app.get('/robots.txt', function(req, res) {
  res.sendFile(path.join(__dirname, 'robots.txt'));
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);
console.log(`App listening on port ${port}!`);
