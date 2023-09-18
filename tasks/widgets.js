const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const clean = require("gulp-clean");
const rename = require('gulp-rename');
const taskServe = require('./serve');
const sass = require('gulp-sass')(require('sass'));

const taskAssets = require('./assets');

const DIR_GLOBAL_MENU = './app/assets/hee/blocks/scaffolding/nhse-global-menu/widget/';

function cleanPublic() {
  return gulp.src('public/widgets/global-menu', { allowEmpty: true})
    .pipe(clean());
}

function compileWidgetGlobalMenuStyles() {
  return gulp.src(DIR_GLOBAL_MENU + 'widget.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    /*.pipe(gulp.dest('public/widgets/global-menu'))*/
    .pipe(cleanCSS())
    .pipe(rename({basename: 'nhse-menu-widget', extname: '.min.css' }))
    .pipe(gulp.dest('public/widgets/global-menu'))
    .pipe(taskServe.connect.reload())
    .on('error', (err) => {
      console.log(err)
      process.exit(1)
    });
}

function compileWidgetGlobalMenuScripts() {
  return taskAssets.webpackBuild(
    DIR_GLOBAL_MENU + 'widget.js',
    'production',
    'nhse-menu-widget.min.js',
    'public/widgets/global-menu'
  );
}

gulp.task('build:widgets:nhse-global-menu', gulp.parallel(
  compileWidgetGlobalMenuStyles,
  compileWidgetGlobalMenuScripts
));

exports.cleanPublic = cleanPublic
exports.compileWidgetGlobalMenuScripts = compileWidgetGlobalMenuScripts
exports.compileWidgetGlobalMenuStyles = compileWidgetGlobalMenuStyles
