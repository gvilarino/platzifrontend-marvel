'use strict'

var $ = require('jquery')
var page = require('page')

var socket = window.socket = io('http://localhost:8080');

socket.on('signin', function (data) {
  console.log(data + 'signed in');
});


require('./layout/layout')
require('./signin/signin')

// ya tenemos page

page() //Inicializar page
