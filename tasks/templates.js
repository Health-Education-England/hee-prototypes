const gulp = require('gulp');
const rename = require('gulp-rename');
const gulpNunjucks = require('gulp-nunjucks');
const nunjucks = require('nunjucks');
const beautify = require('gulp-beautify');

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

// Add base path for GitHub Pages if not local environment.
function getBasePath() {
  let basePath = '';

  if(process.argv.indexOf("--prod") > -1) {
    basePath = '/hee-prototypes';
  } else if (process.argv.indexOf("--staging") > -1) {
    basePath = '/hee-global-header';
  }

  return basePath;
}

function buildTemplates() {
  const basePath = getBasePath();
  const environment = new nunjucks.Environment(
    new nunjucks.FileSystemLoader(config.templates)
  );
  environment.addGlobal('basePath', basePath)

  return gulp.src(['app/views/**/*.html', 'app/assets/**/*.njk', '!app/views/lks/*.html'])
    .pipe(gulpNunjucks.compile({
      baseUrl: config.baseUrl,
    }, {
      env: environment,
    }))
    .pipe(rename({
      extname: '.html',
    }))
    .pipe(beautify.html({
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