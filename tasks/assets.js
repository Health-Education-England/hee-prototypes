const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
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
    .pipe(taskServe.connect.reload())
    .on('error', (err) => {
      console.log(err)
      process.exit(1)
    });
}

function compilePrototypeScripts() {
  return gulp.src(config.PATHS.prototypeJS)
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
        filename: 'prototype.js',
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
    .pipe(taskServe.connect.reload())
    .on('error', (err) => {
      console.log(err)
      process.exit(1)
    });
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

gulp.task('build:assets', gulp.parallel(
  compileHEEAssets,
  compileHEEStyles,
  compileHEEScripts,
  compilePrototypeStyles,
  compilePrototypeScripts,
  copyVendorStyles,
  copyVendorScripts,
  copyImages
));

exports.compileHEEAssets = compileHEEAssets
exports.compileHEEStyles = compileHEEStyles
exports.compileHEEScripts = compileHEEScripts
exports.compilePrototypeStyles = compilePrototypeStyles
exports.compilePrototypeScripts = compilePrototypeScripts
exports.copyVendorStyles = copyVendorStyles
exports.copyVendorScripts = copyVendorScripts
exports.copyImages = copyImages