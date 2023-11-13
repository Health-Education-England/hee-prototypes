# GitHub actions - CI/CD pipeline

The HEE prototype codebase uses a [GitHub Actions](https://github.com/features/actions) workflow as it's CI/CD pipeline, to assist in building, testing and 
deploying compiled code and assets.

The end result is the bundled prototype being served from GitHub Pages, which you can view [here](https://health-education-england.github.io/hee-prototypes/).  

The workflow runs when changes are made to the following branches:

- `master`
- `develop`
- `release/*`

It also runs when a **PR is opened or amended** in GitHub.

## Workflow jobs

Below is a summary of the different workflow jobs and their purpose:

### Build

This job is responsible for configuring Node, and then compiling the frontend prototype assets for use during later
workflow jobs.

It is worth noting that there are two different build steps which are run:

- **Build assets (for GitHub Pages deployment)** - `npm run build:prod`
- **Build assets (for local tests)** - `npm run build`

The reason we require two separate build steps, is that the prototype URL structure on GitHub pages requires a base path
of `/hee-prototypes/`, whereas for local development and running tests within the pipeline, the prototype does not use 
any base path:

- **Production**: https://health-education-england.github.io/hee-prototypes/templates/examples/standard-content.html
- **Local development**: http://localhost:3000/templates/examples/standard-content.html

Once the two versions of the prototype have been compiled, the assets are uploaded as two separate build [artifacts](https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts):

- `assets`
- `assets-tests`

### Bundle and Commit

Using the `assets` artifact uploaded in the steps above, this job is responsible for bundling the assets into the `dist`
directory, and then using `git` to commit any new changes.

We use the pipeline to commit these changes, in order to avoid large amounts of merge conflicts that occur if the
`dist` directory commits are handled by developers locally.

The commit messages appears in the history using the following format:

`[Github Actions] - Bundled assets for build number: ${{ github.run_number }}`

### Run tests  

Using the `assets-tests` artifact uploaded in the steps above, there are two different test jobs run in the pipeline. 

They are only run **when a PR is opened or amended in GitHub**:

- **Run tests: BackstopJS**
- **Run tests: Playwright**

This allows for a first step of quality assurance during the PR review process, as any failed tests will be flagged 
by GitHub, allowing developers to catch any accidental breaking changes before the new code is merged.

For a deeper dive on how to write and run your own tests, please see the [README](https://github.com/Health-Education-England/hee-prototypes/blob/master/tests/README.md) within the `tests` directory.

### Deploy

This action is only run when any changes are made to the `develop` branch. 

It takes the compiled assets from the `dist` directory, and deploys them to [GitHub Pages](https://pages.github.com/).

The `develop` branch represents all frontend work that has been signed off by the design team, and therefore is used as
the source branch for GitHub pages.

Please see [CONTRIBUTING.md](https://github.com/Health-Education-England/hee-prototypes/blob/master/CONTRIBUTING.md)
for more information on HEE branching strategies.
