var template = require('./template.jade')

var $ = require('jquery')
var page = require('page')

page('/', restrict, (ctx, next) => {
  console.log('Navegando al home')
  $('.app-container').html(template());
})

function restrict(ctx, next) {
  console.log('window.user :' + JSON.stringify(window.user))
  // si no hay user definido, llevarlo forzadamente al signin
  if (!window.user) return page('/signin');

  next();
}
