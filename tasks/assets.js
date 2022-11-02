const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const webpack = require("webpack-stream");
const minify = require("gulp-minify");
const base = require('../gulpfile')

function compileHEEStyles() {
  return gulp.src(base.PATHS.heeCSS)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(base.PATHS.public+'/css'))
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(base.PATHS.public+'/css'))
    .pipe(base.connect.reload())
    .on('error', (err) => {
      console.log(err)
      process.exit(1)
    });
}

function compileHEEScripts() {
  return gulp.src(base.PATHS.heeJS)
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
    .pipe(gulp.dest(base.PATHS.public+'/js'))
    .pipe(minify({
      noSource: true,
      ext:{
        src:'.js',
        min:'.min.js'
      }
    }))
    .pipe(gulp.dest(base.PATHS.public+'/js'))
    .pipe(base.connect.reload())
    .on('error', (err) => {
      console.log(err)
      process.exit(1)
    });
}

function copyVendorScripts() {
  return gulp.src(base.PATHS.vendorJS)
    .pipe(gulp.dest(base.PATHS.public+'/js'));
}

function copyVendorStyles() {
  return gulp.src(base.PATHS.vendorCSS)
    .pipe(gulp.dest(base.PATHS.public+'/css'));
}

function compileHEEAssets() {
  return gulp.src([
    'node_modules/nhsuk-frontend/packages/assets/**',
    '!**/assets/**/**/*.js',
    '!**/assets/**/**/*.scss',
  ])
    .pipe(gulp.dest(base.PATHS.public));
}

function copyImages() {
  return gulp.src([
    'app/assets/images/**/*.*',
  ])
    .pipe(gulp.dest(base.PATHS.public + '/images'));
}

gulp.task('build:assets', gulp.parallel(
  compileHEEAssets,
  compileHEEStyles,
  compileHEEScripts,
  copyVendorStyles,
  copyVendorScripts,
  copyImages,
));

exports.compileHEEAssets = compileHEEAssets
exports.compileHEEStyles = compileHEEStyles
exports.compileHEEScripts = compileHEEScripts
exports.copyVendorStyles = copyVendorStyles
exports.copyVendorScripts = copyVendorScripts
exports.copyImages = copyImages