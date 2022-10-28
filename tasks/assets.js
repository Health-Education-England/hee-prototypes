// Gulp build task runner logic.

const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const webpack = require("webpack-stream");
const minify = require("gulp-minify");
const clean = require("gulp-clean");

const config = require('../gulpfile')

function compileHEEStyles() {
  return gulp.src(config.PATHS.heeCSS)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.PATHS.public+'/css'))
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(config.PATHS.public+'/css'))
    .on('error', (err) => {
      console.log(err)
      process.exit(1)
    });
}

function compileHEEScripts() {
  return gulp.src(config.PATHS.heeJS)
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
    .pipe(gulp.dest(config.PATHS.public+'/js'))
    .pipe(minify({
      noSource: true,
      ext:{
        src:'.js',
        min:'.min.js'
      }
    }))
    .pipe(gulp.dest(config.PATHS.public+'/js'))
    .on('error', (err) => {
      console.log(err)
      process.exit(1)
    });
}

/* Copy nhsuk.js under dist/js with version included in the filename */
function copyVendorScripts() {
  return gulp.src(config.PATHS.vendorJS)
    .pipe(gulp.dest(config.PATHS.public+'/js'));
}

/* Copy nhsuk.css under dist/css with version included in the filename */
function copyVendorStyles() {
  return gulp.src(config.PATHS.vendorCSS)
    .pipe(gulp.dest(config.PATHS.public+'/css'));
}

// Compile assets
function compileHEEAssets() {
  return gulp.src([
    //'app/assets/**/**/*.*',
    'node_modules/nhsuk-frontend/packages/assets/**',
    '!**/assets/**/**/*.js',
    '!**/assets/**/**/*.scss'
  ])
    .pipe(gulp.dest(config.PATHS.public));
}

gulp.task('build:assets', gulp.parallel(
  compileHEEAssets,
  compileHEEStyles,
  compileHEEScripts,
  copyVendorStyles,
  copyVendorScripts
));