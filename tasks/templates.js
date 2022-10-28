const gulp = require('gulp');
const rename = require('gulp-rename');
const gulpNunjucks = require('gulp-nunjucks');
const nunjucks = require('nunjucks');
const connect = require('gulp-connect');
const htmlbeautify = require('gulp-html-beautify');

const config = {
  baseUrl: process.env.BASE_URL ? process.env.BASE_URL : '/',
  dest: 'public',
  templates: [
    'app/views',
    'app/assets',
    'node_modules/nhsuk-frontend/packages/components'
  ],
};

/**
 * Turn markdown into html with a nunjucks layout
 */
function buildHtml() {
  return gulp.src(['app/views/**/*.html', '!app/views/lks/*.html'])
    .pipe(gulpNunjucks.compile({
      // site-wide data goes here
      baseUrl: config.baseUrl,
    }, {
      env: new nunjucks.Environment(
        new nunjucks.FileSystemLoader(config.templates)
      ),
    }))
    .pipe(rename({
      extname: '.html',
    }))
    .pipe(htmlbeautify({
      'indent_size': 2,
      'indent_char': ' ',
      'preserve_newlines': false
    }))
    .pipe(gulp.dest(config.dest));
}

gulp.task('build:templates', gulp.parallel(
  buildHtml
));
