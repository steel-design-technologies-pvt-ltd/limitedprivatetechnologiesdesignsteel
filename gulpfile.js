const gulp = require('gulp');
const gulpConcat = require('gulp-concat');
const uglify = require('gulp-uglify');

var scripts = require('./scripts');
var styles = require('./styles');

var devMode = false;

gulp.task('css', function (){
    gulp.src(styles)
        .pipe(gulpConcat('style.css'))
        .pipe(gulp.dest('./app/public/stylesheets/minified'));
});


gulp.task('js', function () {
    gulp.src(scripts)
        .pipe(gulpConcat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./app/public/javascripts/minified'));
    
});

gulp.task('build', function () {
    gulp.start(['css', 'js']);
});