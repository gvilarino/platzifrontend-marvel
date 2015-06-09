/*
 * Module dependencies
 */

import $ from 'jquery';
import page from 'page';

page('/signin', (ctx, next) => {
  $('.app-container').html('signin');
});