const path    = require('path')
const gulp    = require('gulp')
const concat  = require('gulp-concat')
const webpack = require('webpack-stream')
const bs      = require('browser-sync')

// config files
const wpconf  = require('./webpack.config.js')
const bsconf  = require('./bs-config.js')
const fname   = Object.keys(wpconf.entry)[0]

gulp.task('bundle', () => {
  return gulp.src('src/index.js')
    .pipe(webpack(wpconf))
    .pipe(gulp.dest('dist'))
})

gulp.task('create-customjs', () => {
  return gulp.src([`dist/${fname}.js`, 'test/bootstrap.js'])
    .pipe(concat('custom.js'))
    .pipe(gulp.dest('tmp/js'))
})

gulp.task('serve', () => {
  return bs.init(bsconf)
})

gulp.task('watch-customjs', () => {
  return gulp.watch([`dist/${fname}.js`, 'test/bootstrap.js'], ['create-customjs'])
})

gulp.task('watch-package', () => {
  return gulp.watch('tmp/**/*', bs.reload)
})

gulp.task('default', ['bundle', 'create-customjs', 'watch-customjs', 'watch-package', 'serve'])
