// Core dependencies
const gulp = require('gulp');
const connect = require('gulp-connect');

// External dependencies
const browserSync = require('browser-sync');
const clean = require('gulp-clean');
const nodemon = require('gulp-nodemon');

// Version from package.json
const { version } = require('./package.json');

// Local dependencies
const config = require('./app/config');

// Set configuration variables
const port = process.env.PORT || config.port;

const PATHS = {
  heeCSS: './app/assets/styles/hee.scss',
  heeJS: './app/assets/javascript/hee.js',
  vendorCSS: [
    './app/assets/styles/highlight.css',
    'node_modules/nhsuk-frontend/dist/nhsuk-4.1.0.min.css'
  ],
  vendorJS: [
    './app/assets/javascript/jquery-3.3.1.min.js',
    './app/assets/javascript/highlight.min.js',
    'node_modules/nhsuk-frontend/dist/nhsuk.min.js'
  ],
  public: 'public',
  dist: 'dist'
};

// Task runners
require('./tasks/assets');
require('./tasks/templates');

function reload(done) {
  browserSync.reload();
  done();
}

// Start browsersync
function startBrowserSync(done){
  browserSync.init({
    proxy: 'localhost:' + port,
    port: port + 1000,
    ui: false,
    files: ['app/views/**/*.*'],
    ghostmode: false,
    open: false,
    notify: true,
    watch: true,
  }, done);
  gulp.watch('public/**/*.*').on('change', reload);
}

// Watch for changes within assets/
function watch() {
  gulp.watch(['app/assets/**/*.scss', 'app/assets*/**/*.scss'], compileHEEStyles);
  gulp.watch(['app/assets/styles/!*.css', 'app/assets/styles/hee.scss'], copyVendorStyles);
  gulp.watch(['app/assets/components/!**/!*.js'], compileHEEScripts);
  gulp.watch(['app/assets/javascript/hee.js'], copyVendorScripts);
}

function cleanPublic() {
  return gulp.src('public', { allowEmpty: true})
  .pipe(clean());
}

function serve() {
  connect.server({
    host: '0.0.0.0',
    livereload: true,
    port: 3000,
    root: PATHS.public,
  });
}

gulp.task('build', gulp.series(
  cleanPublic,
  'build:assets',
  'build:templates'
));

gulp.task('serve', gulp.series(
  gulp.parallel(serve)
));

gulp.task('default', gulp.series(startBrowserSync, watch));

exports.PATHS = PATHS;
