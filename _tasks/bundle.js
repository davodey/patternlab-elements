// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify');

// Copies the assetts from the pearson elements library and brings them into UI / Pattern Lab.

gulp.task('bundle', function() {
    gulp.src("node_modules/edition-node-gulp/pattern_exports/**")
        .pipe(gulp.dest('dest/components/'));

    gulp.src("ui/fonts/**")
        .pipe(gulp.dest('dest/fonts/'));

    gulp.src("ui/scss/**")
        .pipe(gulp.dest('dest/scss/'));

    gulp.src("ui/images/**")
        .pipe(gulp.dest('dest/images/'));

    return sass('ui/scss/*.scss', {
        style: 'compressed',
        lineNumbers: false
    })
        .pipe(autoprefixer('last 2 version', 'safari 4', 'ie 8', 'ie 9', 'ie 10', 'opera 12.1', 'ios 6', 'android 4','Firefox > 16'))
        .pipe(gulp.dest('dest/css/'));
});
