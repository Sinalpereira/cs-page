var gulp=require('gulp');
var less=require('gulp-less');
var postcss=require('gulp-postcss');
var autoprefixer=require('autoprefixer');
var cssnano=require('cssnano');

// -------------------css task-------------------//
gulp.task("css",function(){
  var plugins=[cssnano(),autoprefixer()];
    return gulp.src('src/less/index.less')
    .pipe(less())
    .pipe(gulp.dest('src/dist'))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('src/dest'));
})

// -------------------watch task-------------------//
gulp.task("watch", function() {
    gulp.watch("src/less/*.less", ["css"]);
  });
  
// -------------------default task-------------------//
  gulp.task("default", [
    "watch",
    "css"
  ]);