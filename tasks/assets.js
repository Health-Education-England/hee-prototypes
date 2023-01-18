const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const webpack = require("webpack-stream");
const minify = require("gulp-minify");

const config = require('../gulpfile')
const taskServe = require('./serve')

// Define default webpack options for JS compilation.
const webpackOpts = {
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
  target: 'web'
};

function compileHEEStyles() {
  return gulp.src(config.PATHS.heeCSS)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.PATHS.public+'/css'))
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(config.PATHS.public+'/css'))
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
    .pipe(gulp.dest(config.PATHS.public+'/css'))
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(config.PATHS.public+'/css'))
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
    config.PATHS.public + '/js'
  );
}

// Compiles HEE JS into non-minified version for development debugging.
function compileHEEScriptsDev() {
  return webpackBuild(
    config.PATHS.heeJS,
    'development',
    'hee.js',
    config.PATHS.public + '/js'
  );
}

// Compiles JS only associated with Prototype.
function compilePrototypeScripts() {
  return webpackBuild(
    config.PATHS.prototypeJS,
    'production',
    'prototype.min.js',
    config.PATHS.public + '/js'
  );
}

function copyVendorScripts() {
  return gulp.src(config.PATHS.vendorJS)
    .pipe(gulp.dest(config.PATHS.public+'/js'));
}

function copyVendorStyles() {
  return gulp.src(config.PATHS.vendorCSS)
    .pipe(gulp.dest(config.PATHS.public+'/css'));
}

function compileHEEAssets() {
  return gulp.src([
    'node_modules/nhsuk-frontend/packages/assets/**',
    '!**/assets/**/**/*.js',
    '!**/assets/**/**/*.scss',
  ])
    .pipe(gulp.dest(config.PATHS.public));
}

function copyImages() {
  return gulp.src([
    'app/assets/images/**/*.*',
  ])
    .pipe(gulp.dest(config.PATHS.public + '/images'));
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