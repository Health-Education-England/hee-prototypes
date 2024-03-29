const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require('sass'));
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const webpack = require("webpack-stream");
const minify = require("gulp-minify");

const config = require('../gulpfile')
const taskServe = require('./serve')

function compileHEEStyles() {
  return gulp.src(config.PATHS.heeCSS)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.PATHS.public + '/assets/css'))
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(config.PATHS.public + '/assets/css'))
    .pipe(taskServe.connect.reload())
    .on('error', (err) => {
      console.log(err)
      process.exit(1)
    });
}

function compilePrototypeStyles() {
  return gulp.src(config.PATHS.prototypeCSS)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.PATHS.public + '/assets/css'))
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(config.PATHS.public + '/assets/css'))
    .pipe(taskServe.connect.reload())
    .on('error', (err) => {
      console.log(err)
      process.exit(1)
    });
}

// Compiles HEE JS into minified version for production usage.
function compileHEEScriptsProd() {
  return webpackBuild(
    config.PATHS.heeJS,
    'production',
    'hee.min.js',
    config.PATHS.public + '/assets/js'
  );
}

// Compiles HEE JS into non-minified version for development debugging.
function compileHEEScriptsDev() {
  return webpackBuild(
    config.PATHS.heeJS,
    'development',
    'hee.js',
    config.PATHS.public + '/assets/js'
  );
}

// Compiles JS only associated with Prototype.
function compilePrototypeScripts() {
  return webpackBuild(
    config.PATHS.prototypeJS,
    'development',
    'prototype.min.js',
    config.PATHS.public + '/assets/js'
  );
}

function copyVendorScripts() {
  return gulp.src(config.PATHS.vendorJS)
    .pipe(gulp.dest(config.PATHS.public + '/assets/js'));
}

function copyVendorStyles() {
  return gulp.src(config.PATHS.vendorCSS)
    .pipe(gulp.dest(config.PATHS.public + '/assets/css'));
}

function compileHEEAssets() {
  return gulp.src([
    'node_modules/nhsuk-frontend/packages/assets/**',
    '!**/assets/**/**/*.js',
    '!**/assets/**/**/*.scss',
  ])
    .pipe(gulp.dest(config.PATHS.public + '/assets'));
}

function copyImages() {
  return gulp.src([
    'app/assets/images/**/*.*',
  ])
    .pipe(gulp.dest(config.PATHS.public + '/assets/images'));
}

/**
 * Executes webpack build for Javascript assets.
 *
 * @param {string} src        Source JS file.
 * @param {string} mode       Webpack mode (production or development).
 * @param {string} filename   Compiled filename.
 * @param {string} dest       Destination directory.
 *
 * @returns {Object}
 */
function webpackBuild(src, mode, filename, dest) {
  return gulp.src(src)
    .pipe(webpack({
      mode: mode,
      devtool: mode === 'development' ? 'inline-source-map' : false,
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
        filename: filename,
      },
      target: 'web'
    }))
    .pipe(gulp.dest(dest))
    .pipe(taskServe.connect.reload())
    .on('error', (err) => {
      console.log(err)
      process.exit(1)
    });
}

gulp.task('build:assets', gulp.parallel(
  compileHEEAssets,
  compileHEEStyles,
  compileHEEScriptsDev,
  compileHEEScriptsProd,
  compilePrototypeStyles,
  compilePrototypeScripts,
  copyVendorStyles,
  copyVendorScripts,
  copyImages
));

exports.compileHEEAssets = compileHEEAssets
exports.compileHEEStyles = compileHEEStyles
exports.compileHEEScriptsDev = compileHEEScriptsDev
exports.compileHEEScriptsProd = compileHEEScriptsProd
exports.compilePrototypeStyles = compilePrototypeStyles
exports.compilePrototypeScripts = compilePrototypeScripts
exports.copyVendorStyles = copyVendorStyles
exports.copyVendorScripts = copyVendorScripts
exports.copyImages = copyImages