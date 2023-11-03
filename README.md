# Health Education England - Frontend prototype 

This codebase contains the assets, components, templates ant tooling used to compile the frontend for Health Education 
England's (HEE) different websites / channels.

It is based off the [NHS UK prototype kit](https://github.com/nhsuk/nhsuk-frontend), making use of existing components 
and styles where possible. You can find more information on the NHS UK design system and it's components [here.](https://service-manual.nhs.uk/design-system)

## TODO: Table of contents here

## Prerequisites 

In order to install and configure the prototype on your local machine, there are a few prerequisite tools to install:

- **[Git](https://git-scm.com/)**
- **[GNU Make utility](https://www.gnu.org/software/make/) (Install `build-essential` on Linux, 'Developer tools' or 
'Xcode' on Mac or via `homebrew`, or [GnuWin32 for Windows](https://gnuwin32.sourceforge.net/packages/make.htm))**
- **[Docker](https://www.docker.com/products/docker-desktop/)**
- **[Docker compose](https://docs.docker.com/compose/) (ships with Docker Desktop)**

All other build and testing tools are run within their respective docker containers, so don't need to be installed locally.

## Getting started

To get the prototype up and running you first need to run: 

`make install`

This will pull down the nodejs docker image, and start up the docker container, and finally it will install all the
dependencies defined in `package.json` and `package-lock.json`

Once complete you can run either:

`make serve` 

_This will build the prototype and serve it on a local webserver - [http://localhost:3000](http://localhost:3000/)_

or

`make watch` 

(_This watches all `*.scss` `*.js` `*.njk` and `*.html` files, and rebuilds and reloads the browser when a change is detected_)

### Contributing your work

Before starting on your first piece of work, please see [CONTRIBUTING.md](https://github.com/Health-Education-England/hee-prototypes/blob/master/CONTRIBUTING.md)
for guidelines and best practices regarding HEE branching strategies etc. **-TODO FLESH OUT THIS DOC--**

## Tooling
<a name="tooling"></a>

The HEE prototype uses the following tech / tooling to compile and serve the prototype:

- [SASS](https://www.npmjs.com/package/sass) 
- [JS ES6](https://www.w3schools.com/js/js_es6.asp)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [NHS UK front end library](https://github.com/nhsuk/nhsuk-frontend)
- [Gulp](https://github.com/gulpjs/gulp)
- [Babel](https://babeljs.io/) 
- [Webpack](https://webpack.js.org/)
- [BackstopJS](https://garris.github.io/BackstopJS/) (visual regression testing)
- [Playwright](https://playwright.dev/) (end to end javascript testing)

## Makefile commands

We make use of a `Makefile` for a better developer experience when working with the docker containers within the HEE
prototype.

All commands can be run using `make [command-name]`

Below is a complete list of all the commands and their purposes:

`install` - **Installs all node dependencies via npm**

`build` - **Compiles the prototype components, assets and templates into the `public` directory**

`build-prod` - **Same as above, except adds a basePath for Github pages to all links (used for pipeline debugging purposes)**

`serve` - **Runs the `build` command and starts up a local webserver serving the prototype at [http://localhost:3000](http://localhost:3000)**

`watch` - **Runs the `serve` command and recompiles the codebase, reloads the browser when there is a change in any source code**

`npm-audit` - **Runs the npm audit report displaying packages which need secruity updates. Helpful to use alongside 
[GitHub Dependabot](https://github.blog/2020-06-01-keep-all-your-packages-up-to-date-with-dependabot/) reports.**

`open-shell` - **Opens a terminal prompt allowing you to run commands directly within the nodejs container. Useful when installing, removing, upgrading packages or general build debugging.**

`run-tests` - **Runs BackstopJS and Playwright tests. See more details in the Testing section - TODO LINK HERE.**

## Codebase structure

Below is a high level summary of the codebase structure:

### App

```bash
.
├── app
│   ├── assets
│   └── views
```

#### Assets

`/app/assets/hee`

HEE components containing all SASS, JS and Nunjucks assets, organised into the HEE design system definitions:

- **Content**
- **Furniture**
- **Scaffolding**

`/app/assets/prototype`

Contains all styling and JS logic related to the serving of the actual prototype itself. In other words assets which
are not used in any HEE channels, but are used to display the prototype navigation, component / template previews etc.

#### Views

`/app/views`

Contains all the Nunjucks templates which are eventually compiled into flat HTML files within the `public` folder, used 
to render the HEE prototype in browser.

### Tasks

Contains all the Gulp task runners, pertaining to specific parts of the build process:

- Assets - compiling stylesheets, javascript and copying other assets
- Serve - serves prototype via [gulp-connect](https://www.npmjs.com/package/gulp-connect) webserver
- Templates - logic for compiling component nunjucks macros and templates into flat HTML files) 

```bash
├── tasks
│   ├── assets.js
│   ├── serve.js
│   └── templates.js
│   └── README.md
```

For more information on the Gulp build process, please see the [README](https://github.com/Health-Education-England/hee-prototypes/blob/master/tasks/README.md) within the tasks directory.

## Tests

As mentioned in the [Tooling](#tooling) section there are two types of tests run against all HEE components and templates:

- [BackstopJS](https://garris.github.io/BackstopJS/) for visual regression testing
- [Playwright](https://playwright.dev/) for end to end javascript testing

For a deeper dive on how to write and run your own tests, please see the [README](https://github.com/Health-Education-England/hee-prototypes/blob/master/tests/README.md) within the `tests` directory:

```bash
├── tests
│   ├── backstop
│   └── playwright
│   └── README.md
```

