/*
 * Module dependencies
 */

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


var port = 8080;

app.use('/public', express.static(__dirname + '/public'));
app.use('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// app.listen(port, function (err) {
//   if (err) return console.log(err);
//   console.log('App started on port ' + port);
// });




// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/socket.html');
// });

io.on('connection', function(socket){
  console.log('a user connected')

  socket.on('disconnect', function(){
    console.log('user disconnected')
  })
})

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:', port);
});