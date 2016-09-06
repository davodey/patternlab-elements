// Load plugins
var gulp = require('gulp');

// Copies the assetts from the pearson elements library and brings them into UI / Pattern Lab.
gulp.task('configure', ['install-elements'], function() {
    gulp.src("patternlab-config.json")
        .pipe(gulp.dest('node_modules/edition-node-gulp/'));

    gulp.src("node_modules/edition-node-gulp/source/**/*")
        .pipe(gulp.dest('pattern-lab/source'));

    gulp.src("node_modules/pearson-elements/dist/fonts/**")
        .pipe(gulp.dest('ui/fonts/'))
        .pipe(gulp.dest('pattern-lab/source/fonts/'));

    gulp.src("node_modules/pearson-elements/dist/images/**")
        .pipe(gulp.dest('ui/images/'))
        .pipe(gulp.dest('pattern-lab/source/images/'));

    gulp.src("node_modules/pearson-elements/scss/**")
        .pipe(gulp.dest('ui/scss/elements/'));

    gulp.src("node_modules/font-awesome/fonts/**")
        .pipe(gulp.dest('ui/fonts/'))
        .pipe(gulp.dest('pattern-lab/source/fonts/'));

    gulp.src("node_modules/font-awesome/scss/**")
        .pipe(gulp.dest('ui/scss/font-awesome/'));
});


