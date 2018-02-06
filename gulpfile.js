const gulp = require('gulp');
const ugjs = require('gulp-uglify');
const watch = require('gulp-watch');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const named = require('vinyl-named');
const del = require('del');
const watchPath = require('gulp-watch-path');
const replace = require('gulp-replace');

const rev = require('gulp-rev');
const ifElse = require('gulp-if-else');
const browserSync = require('browser-sync').create();
const base64 = require('gulp-base64');
const runSequence = require('run-sequence');
const bsReload = browserSync.reload;
const postcss = require('gulp-postcss'); //postcss本身
const autoprefixer = require('autoprefixer');
const precss = require('precss'); //提供像scss一样的语法
const cssnano = require('cssnano');  //更好用的css压缩!
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const revCollector = require('gulp-rev-collector');
const exec = require('child_process').exec;
const CDN = require('./config/cdn');
console.log(CDN);
const webpackConfig = require('./config/webpack.base');

const processes = [
  autoprefixer({browsers: ['last 2 version', 'safari 5', 'opera 12.1', 'ios 6', 'android 4', '> 10%']}),
  precss,
  cssnano
];

const src = {
  css: './src/**/*.css',
  images: './src/**/*.{png,jpg,jpeg}',
  js: './src/**/*.js',
  views: './src/**/*.html'
};
const dist = {
  css: './dist/**/*.css',
  images: './dist/**/*.{png,jpg,jpeg}',
  js: './dist/**/*.js',
  views: './dist/**/*.html'
};

gulp.task('views', function () {
  return gulp.src(src.views)
  .pipe(gulp.dest(dist.views));
});
gulp.task('images', function () {
  gulp.src(src.images)
  .pipe(gulp.dest(dist.images));
});
gulp.task('css', function () {
  return gulp.src(src.css)
  .pipe(gulp.dest(dist.css));
});
gulp.task('js', function () {
  return gulp.src(src.js)
  .pipe(gulp.dest(dist.js));
});