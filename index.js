/*
 * Module dependencies
 */

var express = require('express');

var app = express();
var port = 3000;

app.use('/public', express.static(__dirname + '/public'));
app.use('*', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function (err) {
  if (err) return console.log(err);
  console.log('App started on port ' + port);
});