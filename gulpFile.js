var gulp=require('gulp');
var path = require('path');
var less=require('gulp-less');
var postcss=require('gulp-postcss');
var gcmq = require('gulp-group-css-media-queries');
var cmq=require('gulp-combine-media-queries');
var autoprefixer=require('autoprefixer');
var cssnano=require('cssnano');
var pcmq = require ('postcss-extract-media-query');

// -------------------css task-------------------//
gulp.task("css",function(){
  var plugins=[cssnano(),autoprefixer(),pcmq({
    output : {
      path : path.join('src/postcss','postcss'),
      name: '[name]-[query].[ext]'
    }
  })];
    return gulp.src('src/less/index.less')
    .pipe(less())
    .pipe(gulp.dest('src/dist'))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('src/dest'));
})
gulp.task('gcmq', function () {
  gulp.src('src/dist/index.css')
      .pipe(gcmq())
      .pipe(gulp.dest('src/mediaquery'));
});
// -------------------watch task-------------------//
gulp.task("watch", function() {
    gulp.watch("src/less/*.less", ["css"]);
  }); 
// -------------------default task-------------------//
  gulp.task("default", [
    "watch",
    "css",
    "gcmq"
  ]);