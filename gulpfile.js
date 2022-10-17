// Core dependencies
const gulp = require('gulp');

// External dependencies
const babel = require('gulp-babel');
const browserSync = require('browser-sync');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const webpack = require('webpack-stream');
const minify = require('gulp-minify');
const nodemon = require('gulp-nodemon');
const sourcemaps = require('gulp-sourcemaps');

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

// Compile HEE CSS + JS
function compileHEEStyles() {
  return gulp.src(PATHS.heeCSS)
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(PATHS.public+'/css'))
  .pipe(cleanCSS())
  .pipe(rename({ extname: '.min.css' }))
  .pipe(gulp.dest(PATHS.public+'/css'))
  .on('error', (err) => {
    console.log(err)
    process.exit(1)
  });
}

function compileHEEScripts() {
  return gulp.src(PATHS.heeJS)
    .pipe(webpack({
      mode: 'production',
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          },
        ],
      },
      output: {
        filename: 'hee.js',
      },
      target: 'web',
    }))
    .pipe(gulp.dest(PATHS.public+'/js'))
    .pipe(minify({
      noSource: true, 
      ext:{
        src:'.js',
        min:'.min.js'
      }
    }))
    .pipe(gulp.dest(PATHS.public+'/js'))
    .on('error', (err) => {
      console.log(err)
      process.exit(1)
    });
}

// Start nodemon
function startNodemon(done) {
  const server = nodemon({
    script: 'app.js',
    stdout: false,
    ext: 'scss js html',
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

function reload() {
  browserSync.reload();
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
  gulp.watch(['app/assets/styles/*.css', 'app/assets/styles/hee.scss'], copyVendorStyles);
  gulp.watch(['app/assets/components/**/*.js'], compileHEEScripts);
  gulp.watch(['app/assets/javascript/hee.js'], copyVendorScripts);
  gulp.watch(['app/assets/scaffolding/**/*.js'], compileHEEScripts);
  gulp.watch(['app/assets/**/*.njk'], browserSync.reload);
  //gulp.watch(['app/assets/**/**/*.*', '!app/assets/components/**/*.scss', '!app/assets/**/**/*.js'], compileAssets);
  //gulp.watch('docs/assets/sass/**/*.scss', compileStyles);
  //gulp.watch('docs/assets/javascript/**/*.js', compileNonMainJSScripts);
  //gulp.watch('docs/assets/**/**/*.*', compileAssets);
}

/* Copy nhsuk.js under dist/js with version included in the filename */
function copyVendorScripts() {
  return gulp.src(PATHS.vendorJS)
    .pipe(gulp.dest(PATHS.public+'/js'));
}

/* Copy nhsuk.css under dist/css with version included in the filename */
function copyVendorStyles() {
  return gulp.src(PATHS.vendorCSS)
    .pipe(gulp.dest(PATHS.public+'/css'));
}

// Compile assets
function compileHEEAssets() {
  return gulp.src([
    'app/assets/**/**/*.*',
    'node_modules/nhsuk-frontend/packages/assets/**',
    '!**/assets/**/**/*.js', 
    '!**/assets/**/**/*.scss'
  ])
  .pipe(gulp.dest(PATHS.public));
}

function cleanPublic() {
  return gulp.src('public', { allowEmpty: true})
  .pipe(clean());
}

gulp.task('build', gulp.series(
  cleanPublic,
  gulp.parallel(
    compileHEEAssets,
    compileHEEStyles,
    compileHEEScripts,
    copyVendorStyles,
    copyVendorScripts
  )
));

gulp.task('default', gulp.series(startNodemon, startBrowserSync, watch));

exports.watch = watch;
exports.compileHEEStyles = compileHEEStyles;
exports.compileHEEScripts = compileHEEScripts;
exports.compileHEEAssets = compileHEEAssets;
exports.copyVendorStyles = copyVendorStyles;
exports.copyVendorScripts = copyVendorScripts;
exports.cleanPublic = cleanPublic;