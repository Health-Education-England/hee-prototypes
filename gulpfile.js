// Core dependencies
const gulp = require('gulp');

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

// Build task runner.
require('./tasks/build.js');

// Start nodemon
function startNodemon(done) {
  const server = nodemon({
    script: 'app.js',
    stdout: false,
    ext: 'scss js html njk',
    quiet: true,
  });
  let starting = false;

  const onReady = () => {
    starting = false;
    done();
  };

  server.on('start', () => {
    starting = true;
    setTimeout(onReady);
  });

  server.on('stdout', (stdout) => {
    process.stdout.write(stdout);
    if (starting) {
      onReady();
    }
  });
}

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

gulp.task('build', gulp.series(
  cleanPublic,
  'build:assets'
));

gulp.task('default', gulp.series(startNodemon, startBrowserSync, watch));

exports.PATHS = PATHS;
