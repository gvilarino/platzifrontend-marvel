'use strict'

var gulp = require('gulp')
var browserify = require('browserify')
var jadeify = require('jadeify')
var babelify = require('babelify')
var buffer = require('vinyl-buffer')
var source = require('vinyl-source-stream')

var stylus = require('gulp-stylus')
var concat = require('gulp-concat-css')
var nib = require('nib')

var uglify = require('gulp-uglify')
var minify = require('gulp-minify-css')

var gulpif = require('gulp-if')

var lastArg = process.argv.slice(-1)
var production = '--production' == lastArg || '-p' == lastArg

console.log('Building for: ', production ? 'production' : 'development')

var watchify = require('watchify')
var assign = require('lodash.assign')

gulp.task('styl', function () {
  return gulp.src('./lib/app.styl')
    .pipe(stylus({ use: nib() }))
    .pipe(concat('app.css')) // No funciona con sourcemaps
    .pipe(gulpif(production, minify()))
    .pipe(gulp.dest('./public/css'));
})

var opts = {
    entries: './lib/app.js', // Main file
    transform: [ babelify, jadeify ]
  }

gulp.task('watch', function () {
  // Not working!
  var b = watchify(browserify(opts))
  b.on('update', bundle)

  return b
})


gulp.task('build', function () {
  return bundle(browserify(opts))
})

function bundle(b) {
  return b.bundle()
  .pipe(source('app.js')) // The destination file name
  .pipe(buffer())
  .pipe(gulpif(production, uglify()))
  .pipe(gulp.dest('./public/')) // The destination directory
}
