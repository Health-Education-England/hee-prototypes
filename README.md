# HEE prototype kit

Frontend prototype which provides a representation of the design system used to build out all of HEE's different channels.

It is based off the NHS UK prototype kit, making use of existing components and styles where possible. 

Visit the <a href="http://nhsuk-prototype-kit.azurewebsites.net/docs">NHS.UK prototype kit site</a> to download the latest version and read the documentation.

## Installation instructions

- <a href="http://nhsuk-prototype-kit.azurewebsites.net/docs/install/advanced">Developer friendly install guide (technical)</a>

## Distribution bundle

All assets are bundled using a Github Actions workflow in the pipeline, and commited back into this repository.

The generated assets are located within the `dist` folder, with the relevant files for the [HEE CMS Platform](https://github.com/Health-Education-England/hee-cms-platform):

**CSS**:
* `\dist\css\hee.min.css`
* `\dist\css\nhsuk-4.1.0.min.css`

**Javascript**:
- `\dist\js\hee.min.js`
- `\dist\js\nhsuk.min.js`

## Contribute

If you want to contribute to the HEE prototype kit, by reporting bugs, fixing bugs, suggesting new features or writing documentation, then read our [contributing guidelines](CONTRIBUTING.md).