'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('default', function(cb) {
    runSequence([
            'sass',
            'lint',
        ],
        'watch',
        'browser-sync',
        cb);
});