// 基础gulp模块
var gulp = require('gulp');
// webserver服务器
var webserver = require('gulp-webserver');
// mock数据
var url = require('url');
// FileSystem
var fs = require('fs');
// 打包模块
var webpack = require('gulp-webpack');
// 命名模块
var named = require('vinyl-named');
// sass模块
// var sass = require('gulp-sass');
// 压缩css
var minifyCSS = require('gulp-minify-css');
// 丑化模块
var uglify = require('gulp-uglify');
// 版本模块
var rev = require('gulp-rev');
// 版本控制模块
var revCollector = require('gulp-rev-collector');
// 压缩html（暂时不用)
var minifyHTML = require('gulp-minify-html');
// 监控模块
watch = require('gulp-watch');
// 队列模块
sequence = require('gulp-watch-sequence');


var src = {
  css: './src/css/*.css',
  images: './src/images/*.{png,jpg,jpeg}',
  js: './src/js/*.js',
  views: './src/*.html'
};
var dist = {
  css: './dist/css/',
  images: './dist/',
  js: './dist/js/',
  views: './dist/'
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

gulp.task('default', ['views', 'images', 'css', 'js'])