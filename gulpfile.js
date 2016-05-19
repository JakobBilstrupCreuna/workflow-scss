'use strict';
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Runs compiler for SCSS with autoprefixer
gulp.task('styles', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('stylesheets/'));
});


// Opens a new browser that sync on changes
gulp.task('browser-sync', function() {
   browserSync.init({
       server: {
           baseDir: "./"
       }
   });
});

// Watching changes in .html and .scss
gulp.task('watch', function () {
	gulp.watch('scss/**/*.scss', ['styles']).on('change', browserSync.reload);
	gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['watch', 'browser-sync']);
