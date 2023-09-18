// Dependencies
const clean = require('gulp-clean');
const gulp = require('gulp');

// Task runners
const taskAssets = require('./tasks/assets');
const taskTemplates = require('./tasks/templates');
const taskServe = require('./tasks/serve');
const taskWidgets = require('./tasks/widgets');

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
    'node_modules/nhsuk-frontend/dist/nhsuk-7.0.0.min.css'
  ],
  vendorJS: [
    './app/assets/javascript/jquery-3.3.1.min.js',
    './app/assets/prototype/highlight/highlight.min.js',
    'node_modules/nhsuk-frontend/dist/nhsuk-7.0.0.min.js'
  ],
  public: 'public',
  dist: 'dist',
};

function watch(done) {
  gulp.watch(['app/assets/**/*.scss'], gulp.parallel([
    taskAssets.compileHEEStyles,
    taskWidgets.compileWidgetGlobalMenuStyles,
  ]));
  gulp.watch(['app/assets/**/*.js'], gulp.parallel([
    taskAssets.compileHEEScriptsDev,
    taskAssets.compileHEEScriptsProd,
    taskWidgets.compileWidgetGlobalMenuScripts,
  ]));
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
  'build:templates',
  'build:widgets:nhse-global-menu'
));

gulp.task('serve', taskServe.serve);

gulp.task('default', gulp.series([
  'build',
  taskServe.serve,
]));

gulp.task('watch', gulp.series([
  'build',
  gulp.parallel([taskServe.serve, watch]),
]));

gulp.task('playwright-report', taskServe.playwrightReport);

gulp.task('build:widgets', gulp.series([
  taskWidgets.cleanPublic,
  'build:widgets:nhse-global-menu'
]));

exports.PATHS = PATHS;
