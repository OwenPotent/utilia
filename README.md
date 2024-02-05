# Utilia

[![NPM](https://nodei.co/npm/utilia.png)](https://nodei.co/npm/utilia/)

Utilia is an NPM package for use in Discord Bot or JavaScript projects. It is still in development, and if you encounter any errors or would like to contribute, please make a pull request on the [GitHub page](https://github.com/OwenPotent/utilia)!

For more information, please visit the [documentation](https://owenpotent.github.io/utilia).

## Table of Contents

- [Utilia](#utilia)
  - [Table of Contents](#table-of-contents)
  - [What's New?](#whats-new)
    - [Added:](#added)
      - [FileMinifier](#fileminifier)
  - [Getting Started](#getting-started)
  - [Additional Information](#additional-information)
    - [Links](#links)
      - [Made with ❤️ by OwenPotent](#made-with-️-by-owenpotent)

## What's New?

### Added:

#### FileMinifier

The `FileMinifier` class is a new feature that allows you to minify JavaScript files. It can remove comments, whitespace, and combine files. To use it, you can follow the example below:

```javascript
const FileMinifier = require('utilia');

const file = `
  const a = 1;
  const b = 2;
  const c = a + b;
  console.log(c);
`;

const options = {
  removeComments: true,
  removeWhitespace: true,
  combineFiles: true,
}
const minifier = new FileMinifier(file, options);
const minified = minifier.minify("output.js");
```

## Getting Started

To get started, install the npm package by running the command below:

With NPM:
  
  ```bash
  npm install utilia
  ```

With Yarn:

  ```bash
  yarn add utilia
  ```

## Additional Information

### Links

- [GitHub](https://github.com/OwenPotent/utilia)
- [NPM](https://npmjs.com/package/utilia)
- [Docs](https://owenpotent.github.io/utilia)

#### Made with ❤️ by [OwenPotent](https://github.com/OwenPotent)