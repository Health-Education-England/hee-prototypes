# Gulp tasks overview

As previously mentioned in the main [README](https://github.com/Health-Education-England/hee-prototypes/blob/master/README.md),
the HEE frontend development and build process is handled by [Gulp](https://gulpjs.com/).

There are three main types of Gulp tasks used within the workflow which have been split up into different files:
```
├── tasks
│   ├── assets.js
│   ├── serve.js
│   └── templates.js
```

`assets.js` - compiles stylesheets, javascript and copies other third party NHSUK assets

`serve.js` - serves prototype via [gulp-connect](https://www.npmjs.com/package/gulp-connect) webserver

`templates.js` - compiles component nunjucks macros and templates into flat HTML files

## Main tasks - `gulpfile.js` 

Below are the main gulp tasks which are used within our local `Makefile` and the GitHub Actions pipeline:

### `gulp build`

- Cleans the local `public` directory of old assets
- Compiles and minifies **SASS** into **CSS**
- Compiles **ES6 JS** into minified JS via **webpack** 
- Compiles `.njk` and `.html` files into **flat HTML files**
- Copies **NHSUK vendor** CSS, JS and image assets into local `public` directory

It's worth noting that this task accepts an additional `--prod` argument, which compiles all templates with an extra
base path of `/hee-prototypes/`.

We use this argument when building the prototype in the pipeline for deployment on GitHub pages, as the URL structure 
differs to our local environment.

### `gulp serve`

This task spins up a local webserver and serves the prototype on `http://localhost:3000`

### `gulp watch`

This task is will run the `build` task whenever a change to the codebase is made. It also refreshes your local browser
automatically once the build is complete.

This task is useful for local development when making any changes to the codebase.

## Asset tasks - `tasks/assets.js`

Provides one main task: `build:assets` which is called by the main `build` task, and is responsible for
all asset related tasks.

Described below are the main functions and their responsibility:

### `compileHEEStyles()` 

Compiles all the HEE SASS assets into `public/css/hee.css` and then also a minified version into 
`public/css/hee.min.css`.

These are the main CSS assets implemented by the backend developers into Bloomreach.

### `compilePrototypeStyles()`

Compiles all the prototype viewer SASS assets into `public/css/prototype.css` and then also a minified version into
`public/css/prootype.min.css`. 

These assets only style the prototype viewer related assets, and are never used externally by the backend team. The styles 
here provide the prototype viewer layouts, navigation, preview windows etc.

### `compileHEEScriptsProd()`

Uses webpack to transpile our ES6 javascript into minified vanilla javascript into `public/js/hee.min.js`.

This is the javascript asset implemented by the backend developers into Bloomreach.

### `compileHEEScriptsDev()`

Uses webpack to transpile our ES6 javascript into unminified vanilla javascript into `public/js/hee.js`.

This file is used for debugging purposes when comparing production Bloomreach javascript etc.

### `copyVendorScripts()`, `copyVendorStyles()` and `copyImages()`  

Copies all NHSUK vendor assets from `node_modules/nhsuk-frontend` into their corresponding locations within the local `public`
directory.

## Web server tasks - `tasks/serve.js`

Spins up a local webserver using [gulp-connect](https://www.npmjs.com/package/gulp-connect), serving the compiled prototype
within `public` on `http://localhost:3000`.

### `serve()`

We opted to use the `gulp-connect` package as it provided as an easy way to implement middleware, in order to handle the technical
debt of some legacy links within the prototype not having a `.html` extension in place.

Therefore we have some middleware logic which checks if a request is for a page, and if the page exists with a `.html` 
extension, perform a redirect to the file instead of responding with a 404.

## Template tasks - `tasks/templates.js`

Provides the main `build:templates` task, which handles compiling `.njk` and `.html` Nunjucks templates into flat HTML 
files within the local `public` directory.

### `getBasePath()`

Checks for the presence of the `--prod` CLI option, and then returns the GitHub Pages base path of `/hee-prototypes`
if true.

### `buildTemplates()`

Compiles the Nunjuck templates and then pipes the result into a HTML beautify using the following standards:

```
{
  'indent_size': 2,
  'indent_char': ' ',
  'preserve_newlines': false
}
```

The output is then written to flat HTML files within the local `public` directory.
