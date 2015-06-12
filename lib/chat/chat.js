var template = require('./template.jade')

var $ = require('jquery')
var page = require('page')
var io = require('socket.io-client')
var restrict = require('../middlewares-page/middlewares-page').restrict

var socket = io()

function Chat(selector) {
  $(selector).html(template());

  $('form').submit(function () {
    socket.emit('chat message', $('#m').val())
    $('#m').val('')
    return false
  })

  socket.on('chat message', function (msg) {
    $('#messages').append($('<li>').text(msg))
  })
}

module.exports = Chat;