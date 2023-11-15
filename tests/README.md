# Tests

As mentioned in the main [README](https://github.com/Health-Education-England/hee-prototypes/blob/master/README.md) there 
are two types of tests run against the HEE codebase:

- **Visual regression tests** (using [BackstopJS](https://garris.github.io/BackstopJS/))
- **End-to-end tests** (using [Playwright](https://playwright.dev/))

These tests can be run locally, but are also implemented as steps within the CI/CD pipeline, allowing visual or functional
issues to be caught before they are merged into the codebase.

Below we'll cover how to run, debug and implement your own tests in greater detail.

## Visual regression testing - BackstopJS

The concept behind [BackstopJS](https://garris.github.io/BackstopJS/) is fairly simple: 

1. Backstop takes initial reference screenshots of your website
2. Backstop tests are run by a developer after any changes are made
3. Backstop takes new screenshots of your website
4. Backstop compares the reference screenshots against the new screenshots
5. Any differences are flagged by Backstop in a report
6. If the changes are intentional developers then approve the changes via Backstop

### Running Backstop tests

To run backstop use the following Makefile command from the root of the codebase:

`make backstop-test`

This will run the backstop tests within a docker container, and once complete an HTML report will be output to the 
following location:

`tests/backstop/backstop_data/html_report/index.html`

Opening `index.html` in your browser will allow you to view the report and inspect any differences between the reference
screenshots and the test result screenshots.

It's worth noting that Backstop stores all the screenshots taken during testing in this directory:

`tests/backstop/backstop_data/bitmaps_test`

This location is ignored by git, but you may want to clean out this directory from time to time to save on disk space.  

### Approving changes with Backstop

If you are happy that the differences highlighted in the Backstop report are intentional changes, we need to approve the 
changes using this command:

`make backstop-approve`

This will replace the reference screenshots with the new updated versions, and will then need to be committed via git.

Git will highlight the changes in the reference directory which is located here:

`tests/backstop/backstop_data/bitmaps_reference`

We need to ensure this step is taken before opening any pull request, otherwise the Backstop tests within the pipeline
will fail, and will be flagged within the pull request on GitHub.

### Adding Backstop scenarios

Each URL captured by Backstop is defined in config using what is referred to as a **scenario**.

A scenario can define properties such as the URL to capture, which different viewports to use, click interactions etc.

Traditionally new scenarios need to be added to the Backstop config manually, but we are using a [custom backstop docker image](https://github.com/Health-Education-England/run-backstopjs-regression-tests)
which generates config for each of our individual scenarios automatically.

It does this by scanning the `public/templates/examples` and `public/blocks/**/examples` directories for html files, and 
then including default scenario config entries for each file.

For a more in depth explanation on this process please see the [run-backstopjs-regression-tests](https://github.com/Health-Education-England/run-backstopjs-regression-tests)
docker image repo.

### Customising Backstop scenarios

There may be certain situations where you need to customise the auto-generated scenarios. You can do this either by 
amending an existing scenario, or creating a completely new variation of an existing scenario.

#### Customising an existing scenario 

An example of this might be adding a screenshot delay time, or hiding an iframe.

This can be achieved by adding a new entry to the `overrides` array within either of the following files:

- `tests/backstop/scenarios/blocks.json` - for block scenarios
- `tests/backstop/scenarios/templates.json` - for template scenarios

To customise an existing scenario, ensure the `label` key matches the scenario you wish to customise. 

For example, see this custom override adding a screenshot delay to the Google Maps block component:

```
{
  ...
  "overrides": [
    ...
    {
      "label": "blocks-main-google-map",
      "delay": 5000
    }
    ...
  ]
}
```

The format of the `label` key is the scenario type `id` key in the scenario json file, plus the filename of the template.

Using the above example the `id` is:

`tests/backstop/scenarios/blocks.json`:
```
{
  "id": "blocks"
  ...
}
```

Filename without the file extension within `public/blocks/content/main-google-map.html` is `main-google-map`

Therefore, the correct `label` key in the format of `[id_scenario_file][html_filename_no_ext]` is `blocks-main-google-map`  

#### Creating a variation of an existing scenario.

It is also possible to create a variation of an existing scenario, by creating a custom label and including the `url`
property within the scenario definition.

See this example whereby the desktop menu is being captured after a click interaction, and only using the desktop viewport:

```
{
  "label": "blocks-header-navigation-desktop-submenu-click",
  "clickSelectors": [
    "li.nhsuk-subnav"
  ],
  "url": "http://127.0.0.1:8080/blocks/scaffolding/examples/header-navigation.html",
  "viewports": [
    {
      "label": "desktop",
      "width": 1280,
      "height": 720
    }
  ]
}
```

The `label` key is unique, but is a variation of the original `blocks-header-navigation-desktop-submenu` scenario label. 

This will create a new scenario within the Backstop report, while keeping the original intact.

### Configuring Backstop

If you wish to alter the Backstop configuration, you can do so by editing the base config file here:

`tests/backstop/config/base.json`

The config properties within this base file, are combined with the auto generated scenarios, and then combined,
resulting in a final backstop config located here: 

`tests/backstop/config/backstop.json`

Please note that this file is ignored by git and is compiled before every test run, so any edits made directly to this file 
will be overwritten.

If you would like to debug any changes made to the base configuration or scenarios without running any tests, you can 
regenerate the config by running this command:

`make backstop-generate-config`

## End-to-end testing - Playwright

In order to ensure all javascript functionality is working as expected, we use [Playwright](https://playwright.dev/) to perform interactions against
templates and components, and validate the results.

Each Playwright test will follow this general flow:

1. Headless browser navigates to specific component / template URL
2. Playwright validates default state of component / template via "[Assertions](https://playwright.dev/docs/writing-tests#assertions)"
3. Playwright interacts with the browser via "[Actions](https://playwright.dev/docs/writing-tests#actions)"
4. Playwright validates new state of component / template via "[Assertions](https://playwright.dev/docs/writing-tests#assertions)"
5. Repeat for further interactions if necessary

### Running Playwright tests

To run all the Playwright tests use the following Makefile command:

`make playwright-test`

This will start up a docker container using Microsoft's official [Playwright docker image](https://playwright.dev/docs/docker), 
and run all the tests / specs using the following headless browsers:

- **Chrome**
- **Firefox**
- **Safari**

Using the official docker image to run Playwright removes any need for local development environment configuration, as 
Playwright installation requirements differ between each operating system.

It's worth noting that Playwright tests are also run via the GitHub Actions pipeline, whenever a pull request is opened
or amended.

Therefore, we need to ensure that we run Playwright tests locally before opening any pull request, otherwise the Playwright tests 
within the pipeline will fail, and will be flagged within the pull request on GitHub.

Tests are located in the following location:

`tests/playwright/specs`

#### Running a single test

When writing or debugging a Playwright test / spec, you might find it useful to run a specific test, instead running the
entire suite of tests.

To run a single test use the following Makefile command:

`make playwright-test-single TEST=[test-filename]`

The filename for a specific test can be found within this directory: `tests/playwright/specs`

The example below will only run the test for the Newsletter Form component:

`make playwright-test-single TEST=newsletter-form.spec.js`

### Viewing a Playwright report

After each Playwright run completes, a report is output to the console listings all the successfully passed tests, and
further detailing any failed including the line number where the failure occurred.

Sometimes a detailed console based report can be difficult to read, so Playwright also outputs an HTML based report 
which can be viewed locally in your browser.

To view the HTML report use the following Makefile command:

`playwright-serve-report`

Playwright will then start a local webserver to serve the HTML report.

** **NB** ** - the console will output `http://0.0.0.0:9323` as the URL to view the report, but this is **INCORRECT**.

Please replace `0.0.0.0` with `localhost` in the URL and use:

`http://localhost:9323`

Not doing so might result in the report throwing javascript errors when tracing tests (more on tracing below).

### Debugging / tracing a Playwright test

While the console and HTML reports provide extensive details on the results of each of the test steps, you may need to 
take a deeper dive and observe the interactions and state from within the browser.

For these situations Playwright has a [trace viewer](https://playwright.dev/docs/trace-viewer) which provides extensive
debugging tools such as a timeline, snapshots and logging details.

Running the tests with tracing enabled will generally slow down the execution speed (and use further disk space), so 
it is not enabled by default.

To enable trace capture when running the tests, use the following Makefile command:

`playwright-test-trace`

Then you can view the HTML report using the usual Makefile report command:

`playwright-serve-report`

To launch the trace viewer click on the test spec you wish to view, and then click on the screenshot imagine within the
`Traces` fieldset.

It's worth noting that tracing is enabled by default when running a single test using the `make playwright-test-single`
Makefile command.