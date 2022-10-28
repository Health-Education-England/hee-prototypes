// Core dependencies
const gulp = require('gulp');
const connect = require('gulp-connect');

// External dependencies
const clean = require('gulp-clean');

// Task runners
const taskAssets = require('./tasks/assets');
const taskTemplates = require('./tasks/templates');

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

function watch() {
  gulp.watch(['app/assets/**/*.scss', 'app/assets*/**/*.scss'], taskAssets.compileHEEStyles);
  gulp.watch(['app/assets/styles/!*.css', 'app/assets/styles/hee.scss'], taskAssets.copyVendorStyles);
  gulp.watch(['app/assets/components/!**/!*.js'], taskAssets.compileHEEScripts);
  gulp.watch(['app/assets/javascript/hee.js'], taskAssets.copyVendorScripts);
  gulp.watch(['app/**/*.njk', 'app/**/*.html'], taskTemplates.buildHtml);
}

function cleanPublic() {
  return gulp.src('public', { allowEmpty: true})
  .pipe(clean());
}

function serve() {
  connect.server({
    host: 'localhost',
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

gulp.task('default', gulp.parallel(
  serve,
  watch
));

exports.PATHS = PATHS;
