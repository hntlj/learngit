// 基础gulp模块
var gulp = require('gulp');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

// var src = {
//   css: './src/**/*.css',
//   images: './src/**/*.{png,jpg,jpeg}',
//   js: './src/**/*.js',
//   views: './src/*.html'
// };
// var dist = {
//   css: './dist/',
//   images: './dist/',
//   js: './dist/',
//   views: './dist/'
// };

// gulp.task('views', function () {
//   return gulp.src(src.views)
//   .pipe(gulp.dest(dist.views));
// });
// gulp.task('images', function () {
//   gulp.src(src.images)
//   .pipe(gulp.dest(dist.images));
// });
// gulp.task('css', function () {
//   return gulp.src(src.css)
//   .pipe(gulp.dest(dist.css));
// });
// gulp.task('js', function () {
//   return gulp.src(src.js)
//   .pipe(gulp.dest(dist.js));
// });

gulp.task('gulp', function(){
  return gulp.src('./src/**')
  .pipe(gulp.dest('./dist/'))
  .pipe(webpackStream(webpackConfig))
  .pipe(gulp.dest('./dist/js'))
});
// gulp.task('webpack', function(){
//   webpack(webpackConfig);
// });

// gulp.task('default', ['gulp', 'webpack'])
gulp.task('default', ['gulp'])