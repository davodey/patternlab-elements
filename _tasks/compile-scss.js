var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify');

gulp.task('compile-scss', function () {
    return sass('ui/scss/*.scss', {
            style: 'expanded',
            lineNumbers: true
        })
        .pipe(autoprefixer('last 2 version', 'safari 4', 'ie 8', 'ie 9', 'ie 10', 'opera 12.1', 'ios 6', 'android 4','Firefox > 16'))
        .pipe(gulp.dest('pattern-lab/source/css'))
        .pipe(gulp.dest('ui/css'));
});