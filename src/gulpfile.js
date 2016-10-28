'use strict';

var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var scss = require('gulp-sass');
var livereload = require('gulp-livereload');
var uglify = require('gulp-uglify');

var configPackage = require('./package.json');
var config = configPackage.config;

/**
 * @param length
 * @returns {string}
 */
Number.prototype.padZero= function(length){
    var str = String(this);
    length = length || 2;

    while(str.length < length) {
        str = '0' + s;
    }

    return s;
};

/**
 * @param {object} error
 */
var reportError = function(error) {
    console.error(error.toString());

    this.emit('end');
};

/**
 * Watch task for development
 */
gulp.task('watch', function() {
    livereload.listen({
        port: 8200
    });

    gulp.watch(config.path.cssDev + '/**/**.scss', ['build-css']);
});

/**
 * Task that minifies the CSS
 */
gulp.task('build-css', function(done) {
    gulp.src(config.path.cssDev + '/style.scss')
    .pipe(scss().on('error', reportError))
    .pipe(livereload())
    .pipe(gulp.dest(config.path.css))
    .on('end', done);
});

/**
 * Task that minifies the JS
 */
gulp.task('build-js', function(done) {
    gulp.src(config.path.jsDev + '/main.js')
        .on('error', reportError)
        .pipe(gulp.dest(config.path.js))
        .pipe(livereload())
        .on('end', done);
});

/**
 * Compress all javascript files
 */
gulp.task('compress-js', function(done) {
    gulp.src(config.path.js + '/js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest(config.path.js))
        .on('end', done);
});

/**
 * Compress all css files
 */
gulp.task('compress-css', function(done) {
    gulp.src(config.path.css + '/**/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest(config.path.css))
        .on('end', done);
});

/**
 * build task for css and js
 */
gulp.task('build', [
    'build-css',
    'build-js'
], function() {
    gulp.run([
        'compress-js',
        'compress-css'
    ]);
});

/**
 * default task -> runs watch task
 */
gulp.task('default', ['watch']);

