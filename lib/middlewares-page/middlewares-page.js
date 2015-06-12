/**
 * Module dependencies.
 */

var page = require('page')

module.exports = {
  restrict: function restrict(ctx, next) {
    console.log('Restricting!')
    console.log('Context :' + JSON.stringify(ctx))
    console.log('window.user :' + window.user)
    if (!window.user) return page('/signin')

    next()
  }
}