/**
 * Created by debarshi on 15/10/16.
 */
var gulp = require('gulp');
var webpack = require('gulp-webpack');
var sass = require('gulp-sass');

gulp.task('default', ['react', 'sass']);

gulp.task('watch', function() {
    gulp.watch('./public/src/app/**/*.js', ['react']);
    gulp.watch('./public/styles/scss/**/*.scss', ['sass']);
});

gulp.task('react', function() {
    return gulp.src('./public/src/app/app.js')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest('./'));
});

gulp.task('sass', function () {
    return gulp.src('./public/styles/scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/styles/css/'));
});