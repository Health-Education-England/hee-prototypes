const connect = require('gulp-connect');
const fs = require('fs')

function serve() {
  connect.server({
    host: 'localhost',
    livereload: true,
    port: 3000,
    root: 'public',
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

function playwrightReport() {
  connect.server({
    host: 'localhost',
    livereload: true,
    port: 8080,
    root: 'tests/playwright/report'
  });
}

exports.connect = connect
exports.serve = serve
exports.playwrightReport = playwrightReport