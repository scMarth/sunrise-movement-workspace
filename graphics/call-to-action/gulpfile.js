// required plugins
const gulp = require('gulp'),
  less = require('gulp-less'),
  csso = require('gulp-csso'),
  concat = require('gulp-concat'),
  clean = require('gulp-clean');

// config
const paths = {
  css: [
    'src/less/styles.less'
  ],
  dest: 'build'
},
options = {
  src: {
    clean: {
      allowEmpty: true
    }
  }
};

// css
gulp.task('css', () => {
  return gulp.src(paths.css)
    .pipe(concat('app.styles.min.css'))
    .pipe(less())
    .pipe(csso())
    .pipe(gulp.dest('build/css'))    
});

// clean
gulp.task('clean', () => {
  return gulp.src(paths.dest, options.src.clean)
    .pipe(clean())
});

gulp.task('watch', function(){
  gulp.watch(paths.css,  gulp.series('css'));
});

gulp.task('default', gulp.series('clean', 'css'));