module.exports = {
  id: 'hee-prototypes',
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
  dockerCommandTemplate: 'docker run --expose 3000 --network=\'host\' -P --rm -i -u $(id -u ${USER}):$(id -g ${USER}) --mount type=bind,source=\'{cwd}\',target=/src backstopjs/backstopjs:{version} {backstopCommand} {args}',
  engine: 'puppeteer',
  engineOptions: {
    args: [
      '--no-sandbox'
    ]
  },
  paths: {
    bitmaps_reference: 'tests/backstop/backstop_data/bitmaps_reference',
    bitmaps_test: 'tests/backstop/backstop_data/bitmaps_test',
    casper_scripts: 'tests/backstop/backstop_data/casper_scripts',
    html_report: 'tests/backstop/backstop_data/html_report',
    ci_report: 'tests/backstop/backstop_data/ci_report'
  },
  report: [
    'browser'
  ],
  scenarios: [
    {
      label: 'Example - Homepage',
      url: 'http://localhost:3000/templates/examples/homepage.html'
    }
  ],
  viewports: [
    {
      label: 'desktop',
      width: 1280,
      height: 720
    },
    {
      label: 'tablet',
      width: 768,
      height: 1024
    },
    {
      label: 'mobile',
      width: 375,
      height: 667
    }
  ]
}