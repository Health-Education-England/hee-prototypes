# Health Education England - Frontend prototype 

This codebase contains the assets, components, templates ant tooling used to compile the frontend for Health Education 
England's (HEE) different websites / channels.

It is based off the [NHS UK prototype kit](https://github.com/nhsuk/nhsuk-frontend), making use of existing components 
and styles where possible. You can find more information on the NHS UK design system and it's components [here.](https://service-manual.nhs.uk/design-system)

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
for guidelines and best practices regarding HEE branching strategies etc. **----TODO FLESH OUT THIS DOC-----**

## Tooling

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







 

