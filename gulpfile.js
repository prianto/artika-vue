var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  // return gulp.src('./src/**/[^_]*.scss')
  return gulp.src(['./scss/**/*.scss', '!./scss/**/_*.scss', '!./scss/**/_tmp/**/*'])
    .pipe(sass())
    .pipe(gulp.dest(function(file) {
      var base = file.base;
      return base.replace('scss', 'src');
    }));
});

gulp.task('default', ['sass']);
