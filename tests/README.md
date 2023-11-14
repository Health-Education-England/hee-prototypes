# Tests

As mentioned in the main [README](https://github.com/Health-Education-England/hee-prototypes/blob/master/README.md) there 
are two types of tests run against the HEE codebase:

- **Visual regression tests** (using [BackstopJS](https://garris.github.io/BackstopJS/))
- **End to end tests** (using [Playwright](https://playwright.dev/))

These tests can be run locally, but are also implemented as steps within the CI/CD pipeline, allowing visual or functional
issues to be caught before they are merged into the codebase.

Below we'll cover how to run, debug and implement your own tests in greater detail.

## Visual regression testing - BackstopJS

The concept behind [BackstopJS](https://garris.github.io/BackstopJS/) is fairly simple: 

1. Backstop takes initial reference screenshots of your website
2. Backstop tests are by a developer after a change to the code is made
3. Backstop takes new screenshots of your website
4. Backstop compares the reference screenshots again the new screenshots
5. Any differences are flagged by Backstop in a report
6. If the changes are intentional developers then approve the new screenshot containing the changes

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
will fail, and will be flagged on GitHub.

### Adding new Backstop scenarios

Each URL captured by Backstop is defined in config using what is referred to as a **scenario**.

A scenario can define properties such as the URL, which different viewports to use, click interactions etc.

Usually new scenarios need to be added to the Backstop config manually, but we are using a [custom backstop docker image](https://github.com/Health-Education-England/run-backstopjs-regression-tests)
which generates config for our individual scenarios automatically.

It does this by scanning the `public/templates/examples` and `public/blocks/**/examples` directories for html files, and 
then including default scenario config entries for each file.

For a more in depth explanation on this process please see the [run-backstopjs-regression-tests](https://github.com/Health-Education-England/run-backstopjs-regression-tests)
docker image repo.


