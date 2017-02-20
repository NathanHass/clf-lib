
// Mixin Clover >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var gulp        = require('gulp');
    gulp.tasks  = require('./lib/gulp/clover').tasks;

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Mixin Clover


gulp.task('default', [ 'clover-serve' ]);
