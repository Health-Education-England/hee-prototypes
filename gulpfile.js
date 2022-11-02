// Dependencies
const clean = require('gulp-clean');
const connect = require('gulp-connect');
const fs = require('fs')
const gulp = require('gulp');

// Task runners
const taskAssets = require('./tasks/assets');
const taskTemplates = require('./tasks/templates');

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
  dist: 'dist',
};

function watch(done) {
  gulp.watch(['app/assets/**/*.scss', 'app/assets*/**/*.scss'], taskAssets.compileHEEStyles);
  gulp.watch(['app/assets/styles/!*.css', 'app/assets/styles/hee.scss'], taskAssets.copyVendorStyles);
  gulp.watch(['app/assets/components/!**/!*.js'], taskAssets.compileHEEScripts);
  gulp.watch(['app/assets/javascript/hee.js'], taskAssets.copyVendorScripts);
  gulp.watch(['app/views/**/*.njk', 'app/views/**/*.html'], taskTemplates.buildTemplates);
}

function serve() {
  connect.server({
    host: 'localhost',
    livereload: true,
    port: 3000,
    root: PATHS.public,
    middleware: function(connect, opt) {
      return [function(req, res, next) {
        // Check if the request is for an asset.
        let isAsset = false
        const extensions = ['html', 'css', 'js', 'less', 'jpg', 'jpeg', 'png', 'gif']
        for (let i = 0; i < extensions.length; i++) {
          if (req.url.search('.' + extensions[i]) !== -1) {
            isAsset = true
            break
          }
        }

        // Redirect to HTML file if not a directory root / index page. This
        // fixes broken links that don't contain the .html extension from the
        // legacy node app.
        if (!isAsset && req.url.slice(-1) !== '/') {
          const filename = './public' + req.url + '.html'
          try {
            if (fs.existsSync(filename)) {
              res.writeHead(301, {Location: 'http://' + opt.host + ':' + opt.port + req.url + '.html'});
              res.end()
            }
          } catch(err) {
            console.error(err)
          }
        }

        next()
      }]
    }
  });
}

function cleanPublic() {
  return gulp.src('public', { allowEmpty: true})
    .pipe(clean());
}

gulp.task('build', gulp.series(
  cleanPublic,
  'build:assets',
  'build:templates'
));

gulp.task('serve', gulp.series(
  gulp.parallel(serve)
));

gulp.task('default', gulp.series([
  'build',
  gulp.parallel([serve, watch]),
]));

exports.PATHS = PATHS;
exports.connect = connect
