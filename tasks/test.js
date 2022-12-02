const gulp = require('gulp');
const connect = require('gulp-connect');
const run = require('gulp-run');

const taskServe = require('./serve');

/**
 * Executes snapshots and uploads to Percy after starting local webserver.
 *
 * @returns void
 */
function percySnapshot() {
  connect.server(taskServe.options, function() {
    const cmd = new run.Command('npx percy snapshot tests/percy/snapshots.yml');
    cmd.exec(function() {
      connect.serverClose();
    });
  });
}

gulp.task('test:percy', function (done) {
  percySnapshot();
  done();
});

exports.percySnapshot = percySnapshot