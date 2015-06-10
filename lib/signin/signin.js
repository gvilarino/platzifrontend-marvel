var template = require('./template.jade')

var $ = require('jquery')
var page = require('page')

page('/signin', (ctx, next) => {
  $('.app-container').html(template());
  $(document).on('click', '.Signin-button', function (event) {
    event.preventDefault();

    var username = $('.Signin-name-input')[0].value;
    if (!username) return alert('Ingresa un nombre válido');

    window.user = { username: username }
    page('/');
  })
})
