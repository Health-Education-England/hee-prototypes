const gulp = require('gulp');
const rename = require('gulp-rename');
const gulpNunjucks = require('gulp-nunjucks');
const nunjucks = require('nunjucks');
const htmlbeautify = require('gulp-html-beautify');

const taskServe = require('./serve');

const config = {
  baseUrl: process.env.BASE_URL ? process.env.BASE_URL : '/',
  dest: 'public',
  templates: [
    'app/views',
    'app/assets',
    'node_modules/nhsuk-frontend/packages/components'
  ],
};

function buildTemplates() {
  return gulp.src(['app/views/**/*.html', '!app/views/lks/*.html'])
    .pipe(gulpNunjucks.compile({
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
    .pipe(gulp.dest(config.dest))
    .pipe(taskServe.connect.reload());
}

gulp.task('build:templates', gulp.parallel(
  buildTemplates
));

exports.buildTemplates = buildTemplates