// Core dependencies
const gulp = require('gulp');

// External dependencies
const babel = require('gulp-babel');
const browserSync = require('browser-sync');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const webpack = require('webpack-stream');
const nodemon = require('gulp-nodemon');
const sourcemaps = require('gulp-sourcemaps');

// Version from package.json
const { version } = require('./package.json');

// Local dependencies
const config = require('./app/config');

// Set configuration variables
const port = process.env.PORT || config.port;

const PATHS = {
  heeCSS: './app/assets/sass/hee.scss',
  heeJS: './app/assets/javascript/hee.js',
  nhsukCSS: 'node_modules/nhsuk-frontend/dist/nhsuk.css',
  nhsukJS: 'node_modules/nhsuk-frontend/dist/nhsuk.js',
  vendorCSS: [
    //'./app/assets/styles/'
  ],
  vendorJS: [
    './app/assets/javascript/jquery-3.3.1.min.js'
  ],
  public: 'public',
  dist: 'dist'
};

// Compile SASS to CSS
function compilePublicStyles() {
  return gulp.src([PATHS.nhsukCSS, PATHS.heeCSS])
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  //.pipe(cleanCSS())
  .pipe(concat('nhsuk-hee.css'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(PATHS.public+'/css'))
  .on('error', (err) => {
    console.log(err)
    process.exit(1)
  });
}

function compileHEEStyles() {
  return gulp.src([PATHS.heeCSS])
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(cleanCSS())
  .pipe(concat('hee.css'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(PATHS.dist+'/css'))
  .on('error', (err) => {
    console.log(err)
    process.exit(1)
  });
}

// Compile the HEE components JS
function compilePublicScripts() {
  return gulp.src([PATHS.nhsukJS, PATHS.heeJS])
    .pipe(webpack({
      mode: 'development',
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
        filename: 'nhsuk-hee.js',
      },
      target: 'web',
    }))
    .pipe(gulp.dest(PATHS.public+'/js'))
    .on('error', (err) => {
      console.log(err)
      process.exit(1)
    });
}

function compileHEEScripts() {
  return gulp.src([PATHS.heeJS])
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
    .pipe(gulp.dest(PATHS.dist+'/js'))
    .on('error', (err) => {
      console.log(err)
      process.exit(1)
    });
}

// Compile vendor JS (with ES6 support)
function compileVendorScripts() {
  return gulp.src([
    'app/assets/javascript/**/*.js',
    '!app/assets/javascript/hee.js'
  ])
  .pipe(babel())
  .pipe(gulp.dest('public/js'))
  .on('error', (err) => {
    console.log(err)
    process.exit(1)
  });
}

// Start nodemon
function startNodemon(done) {
  const server = nodemon({
    script: 'app.js',
    stdout: false,
    ext: 'scss js html',
    quiet: true,
  });
  let starting = false;

  const onReady = () => {
    starting = false;
    done();
  };

  server.on('start', () => {
    starting = true;
    setTimeout(onReady);
  });

  server.on('stdout', (stdout) => {
    process.stdout.write(stdout);
    if (starting) {
      onReady();
    }
  });
}

function reload() {
  browserSync.reload();
}

// Start browsersync
function startBrowserSync(done){
  browserSync.init({
    proxy: 'localhost:' + port,
    port: port + 1000,
    ui: false,
    files: ['app/views/**/*.*'],
    ghostmode: false,
    open: false,
    notify: true,
    watch: true,
  }, done);
  gulp.watch("public/**/*.*").on("change", reload);
}

// Watch for changes within assets/
function watch() {
  gulp.watch(['app/assets/components/**/*.scss','app/assets/layout/*.scss'], compilePublicStyles);
  gulp.watch('app/assets/**/**/*.js', gulp.parallel(compileVendorScripts, compilePublicScripts));
  //gulp.watch(['app/assets/**/**/*.*', '!app/assets/components/**/*.scss', '!app/assets/**/**/*.js'], compileAssets);
  //gulp.watch('docs/assets/sass/**/*.scss', compileStyles);
  //gulp.watch('docs/assets/javascript/**/*.js', compileNonMainJSScripts);
  //gulp.watch('docs/assets/**/**/*.*', compileAssets);
}

// Delete all the files in /dist build directory
function cleanDist() {
  return gulp.src(PATHS.dist, { allowEmpty: true})
  .pipe(clean());
}

/* Copy nhsuk.js under dist/js with version included in the filename */
function copyNHSUKJS() {
  return gulp.src('node_modules/nhsuk-frontend/dist/nhsuk.min.js')
    .pipe(gulp.dest(PATHS.dist+'/js'));
}

/* Copy nhsuk.css under dist/css with version included in the filename */
function copyNHSUKCSS() {
  return gulp.src('node_modules/nhsuk-frontend/dist/nhsuk-4.1.0.min.css')
    .pipe(gulp.dest(PATHS.dist+'/css'));
}

function copyAssetsToPublic() {
  return gulp.src(PATHS.dist+'/assets*/**/*')
    .pipe(gulp.dest(PATHS.public));
}

// Compile assets
function compilePublicAssets() {
  return gulp.src([
    'app/assets/**/**/*.*',
    'node_modules/nhsuk-frontend/packages/assets/**',
    '!**/assets/**/*.njk', 
    '!**/assets/**/**/*.js', 
    '!**/assets/**/**/*.scss', 
  ])
  .pipe(gulp.dest(PATHS.public));
}
function compileAppAssets() {
  return gulp.src([
    'app/assets/**/**/*.*',
    'node_modules/nhsuk-frontend/packages/assets/**',
    '!**/assets/**/*.njk', 
    '!**/assets/**/**/*.js', 
    '!**/assets/**/**/*.scss', 
  ])
  .pipe(gulp.dest(PATHS.dist));
}

function cleanPublic() {
  return gulp.src('public', { allowEmpty: true})
  .pipe(clean());
}

gulp.task('build', gulp.series(
  cleanPublic,
  gulp.parallel(
    compilePublicStyles,
    compilePublicScripts,
    compileVendorScripts,
    compilePublicAssets
  )
));

gulp.task('bundle', gulp.series(
  //build,
  cleanDist,
  gulp.parallel(
    compileAppAssets,
    copyNHSUKJS,
    copyNHSUKCSS,
    compileHEEStyles,
    compileHEEScripts
  )
));

gulp.task('default', gulp.series(startNodemon, startBrowserSync, watch));

exports.watch = watch;
exports.compilePublicStyles = compilePublicStyles;
exports.compilePublicScripts = compilePublicScripts;
exports.compilePublicAssets = compilePublicAssets;
exports.compileVendorScripts = compileVendorScripts;
exports.copyNHSUKCSS = copyNHSUKCSS;
exports.copyNHSUKJS = copyNHSUKJS;
exports.cleanPublic = cleanPublic;
exports.cleanDist = cleanDist;
exports.compileAppAssets = compileAppAssets;
exports.copyAssetsToPublic = copyAssetsToPublic;

/*gulp.task('bundle', gulp.series(
  'build',
  cleanDist,
  gulp.parallel(
    compileMainJSScriptAndMinify,
    compileAppAssets)));*/

/* Copy main.css under dist/css */
/*function copyMainCSS() {
  return gulp.src('public/css/main.css')
    .pipe(rename(`nhsuk-${version}.css`))
    .pipe(gulp.dest('dist/css/'));
}*/

/* Minify main.css and add a min.css suffix */
/*function minifyMainCSS() {
  return gulp.src('public/css/main.css')
    .pipe(cleanCSS())
    .pipe(rename(`nhsuk-${version}.min.css`))
    .pipe(gulp.dest('dist/css'));
}*/

/* Use Webpack to build minified main.js */
/*function compileMainJSScriptAndMinify() {
  return gulp.src('./app/assets/javascript/main.js')
    .pipe(webpack({
      mode: 'production',
      module: mainJSWebpackRules(),
      output: {
        filename: 'main.min.js',
      },
      target: 'web',
    }))
    .pipe(gulp.dest('./dist/js'));
}*/

