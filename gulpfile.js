var gulp = require('gulp')
var browserify = require('browserify')
var jadeify = require('jadeify')
var babelify = require('babelify')
var buffer = require('vinyl-buffer')
var source = require('vinyl-source-stream')

var stylus = require('gulp-stylus')
var concat = require('gulp-concat-css')
var nib = require('nib')

var minify = require('gulp-minify-css')
var uglify = require('gulp-uglify')

var watchify = require('watchify')
var assign = require('lodash.assign')

var livereload = require('gulp-livereload')

var opts = {
    entries: './lib/app.js', //punto de entrada js
    transform: [ babelify, jadeify] //transformaciones
  }

opts = assign({}, watchify.args, opts)

gulp.task('build', ['styl', 'js'])

gulp.task('js', function() {
  return generateBundle(browserify(opts))
  // return browserify(opts)
  // .bundle()
  // .pipe(source('app.js')) // archivo destino
  // .pipe(buffer())
  // // .pipe(uglify())
  // .pipe(gulp.dest('./public/')) // en dónde va a estar el archivo destino
})

function styl () {
  return gulp.src('./lib/app.styl') // entry point de styl
    .pipe(stylus({ use: nib() })) //inicializo stylus con nib como plugin
    .pipe(concat('app.css'))
    // .pipe(minify())
    .pipe(gulp.dest('./public/css'))
}

gulp.task('styl', function() {
  return styl()
})

gulp.task('styl:livereload', function () {
  return styl().pipe(livereload({ start: true }))
})

gulp.task('styl:watch', ['styl:livereload'], function () {
  return gulp.watch(['./lib/app.styl','./lib/**/*.styl'], ['styl:livereload'])
})

gulp.task('js:watch', function() {
  var w = watchify(browserify(opts));

  w.on('update', function (file) {
    console.log('file modified: %s, rebuilding...', file);
    var b = generateBundle(w).pipe(livereload()) // Here we don't pass the start: true parameter since we know that has been initialized in line 70
    console.log('rebuilt')
    return b
  })

  return generateBundle(w)
    .pipe(livereload({ start: true }))
    // livereload is a singleton, but with the first invoking we have to pass
    // the start:true parameter, just to ensure that the server starts. If it is
    // already started, nothing happens.
})

gulp.task('watch', ['js:watch', 'styl:watch'])

function generateBundle(b) {
  return b
  .bundle()
  .pipe(source('app.js')) // archivo destino
  .pipe(buffer())
  // .pipe(uglify())
  .pipe(gulp.dest('./public/')) // en dónde va a estar el archivo destino
}
