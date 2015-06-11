/*
 * Module dependencies
 */

var express = require('express');

var app = express();
var port = 8080;

app.use('/public', express.static(__dirname + '/public'));
app.use('*', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

var server = require('http').Server(app);

server.listen(port, function (err) {
  if (err) return console.log(err);
  console.log('App started on port ' + port);
});

var io = require('socket.io')(server);

io.on('connection', function (socket) {
  socket.on('login', function (data) {
    io.emit('login', { user: data });
  });
});
