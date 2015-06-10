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

var gutil = require('gulp-util')

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

  var w = watchify(browserify(opts))
  w.on('update', function (file) {
    generateBundle(w)
  })

  w.on('log', gutil.log);

  return generateBundle(w)
})


gulp.task('build', ['styl', 'js'])

gulp.task('js', function () {
  return generateBundle(browserify(opts))
})

function generateBundle(b) {
  return b.bundle()
  .pipe(source('app.js')) // The destination file name
  .pipe(buffer())
  .pipe(gulpif(production, uglify()))
  .pipe(gulp.dest('./public/')) // The destination directory
}
