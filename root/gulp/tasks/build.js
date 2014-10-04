'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', function(cb) {
    runSequence([
            'clean',
            'compass-prod',
            'lint'
        ],
        'usemin',
        'copy',
        cb);
});