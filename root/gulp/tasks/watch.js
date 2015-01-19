'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync'),
    config = require('../config.json');

gulp.task('watch', function() {
    watch(config.dev + 'index.html', function(files, cb) {
            browserSync.reload();
        });

    watch(config.sass + '/**/*.scss', function(files, cb) {
            gulp.start('compass-dev', cb);
        });

    watch([
            config.js + '/**/*.js',
            '!' + config.js + '/libs/**/*.js'
        ], function(files, cb) {
            gulp.start('lint', cb);
            browserSync.reload();
        });
});