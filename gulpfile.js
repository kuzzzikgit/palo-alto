var gulp = require('gulp');
var sass = require('gulp-sass');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var cssmin = require('gulp-cssmin');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var flatten = require('gulp-flatten');
var concat = require('gulp-concat');

var path = {
    partials: './src/partials/*.hbs',
    css:  './src/*.scss',
    html: {
        pages: './src/pages/**/*.hbs',
        partials: './src/partials/'
    },
    images: './src/**/images/*.*',
    js: './src/scripts/*.js',
    mock: './src/mockapi/*.json',
    dist: {
      css:  './dist/',
      html: './dist/',
      images: './dist/images/',
      mock: './dist/mockapi/',
      partials: './dist/',
      js: './dist/scripts/',
    },
    watch: {
        css: './src/**/*.scss',
        html: './src/**/*.hbs'
    }
};

gulp.task('default', ['build', 'serve', 'watch']);

gulp.task('css', function () {
  return gulp.src(path.css)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.dist.css));
});

gulp.task('js', function () {
  return gulp.src(path.js)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(path.dist.js));
});

gulp.task('html', function () {
    return gulp.src(path.html.pages)
        .pipe(handlebars({}, {
            ignorePartials: true,
            batch: [path.html.partials]
        }))
        .pipe(rename({
            dirname: '.',
            extname: '.html'
        }))
        .pipe(gulp.dest(path.dist.html));
});

gulp.task('partials', function () {
  return gulp.src(path.partials)
    .pipe(gulp.dest(path.dist.partials));
});

gulp.task('images', function() {
  gulp.src(path.images)
  .pipe(rename({
        dirname: '.',
  }))
  .pipe(gulp.dest(path.dist.images));
});

gulp.task('mock', function () {
  return gulp.src(path.mock)
    .pipe(gulp.dest(path.dist.mock));
});

gulp.task('build', ['html', 'css', 'images', 'mock', 'js', 'partials']);

gulp.task('watch', function () {
  gulp.watch(path.watch.css, ['css']);
  gulp.watch(path.watch.html, ['html']);
  gulp.watch(path.js, ['js']);
  gulp.watch(path.images, ['images']);
});

gulp.task('serve', ['watch'], function() {
  browserSync.init({
    files: ['index.html', 'profile.html'],
    server: {
      baseDir: path.dist.html
    },
    index: "index.html"
  });
  gulp.watch('dist/**').on('change', browserSync.reload);
});