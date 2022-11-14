// Dependencies
const clean = require('gulp-clean');
const gulp = require('gulp');

// Task runners
const taskAssets = require('./tasks/assets');
const taskTemplates = require('./tasks/templates');
const taskServe = require('./tasks/serve');

const PATHS = {
  heeCSS: './app/assets/hee/hee.scss',
  heeJS: './app/assets/hee/hee.js',
  prototypeCSS: [
    './app/assets/prototype/prototype.scss'
  ],
  prototypeJS: [
    './app/assets/prototype/prototype.js'
  ],
  vendorCSS: [
    './app/assets/prototype/highlight/highlight.css',
    'node_modules/nhsuk-frontend/dist/nhsuk-4.1.0.min.css'
  ],
  vendorJS: [
    './app/assets/javascript/jquery-3.3.1.min.js',
    './app/assets/prototype/highlight/highlight.min.js',
    'node_modules/nhsuk-frontend/dist/nhsuk.min.js'
  ],
  public: 'public',
  dist: 'dist',
};

function watch(done) {
  gulp.watch(['app/assets/hee/hee.scss', 'app/assets/hee/**/*.scss', 'app/assets/components/**/*.scss'], taskAssets.compileHEEStyles);
  gulp.watch(['app/assets/hee/hee.js', 'app/assets/hee/**/*.js'], taskAssets.compileHEEScripts);
  gulp.watch(['app/assets/prototype/prototype.scss', 'app/assets/prototype/**/*.scss'], taskAssets.compilePrototypeStyles);
  gulp.watch(['app/assets/prototype/prototype.js', 'app/assets/prototype/**/*.js'], taskAssets.compilePrototypeScripts);
  gulp.watch(['app/assets/javascript/*.js'], taskAssets.copyVendorScripts);
  gulp.watch(['app/views/**/*.njk', 'app/views/**/*.html', 'app/assets/**/*.njk'], taskTemplates.buildTemplates);
}

function cleanPublic() {
  return gulp.src('public', { allowEmpty: true})
    .pipe(clean());
}

gulp.task('build', gulp.series(
  cleanPublic,
  'build:assets',
  'build:templates'
));

gulp.task('serve', gulp.series(
  gulp.parallel(taskServe.serve)
));

gulp.task('default', gulp.series([
  'build',
  gulp.parallel([taskServe.serve, watch]),
]));

exports.PATHS = PATHS;
