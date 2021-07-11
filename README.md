# discord-utils
 An NPM package for you to use on your Discord Bot or Javascript projects! This is still however in development and countless of errors have been encountered, if you wish to help me add features, make a pull request at the github page!

 ## Getting started

 To get started, install the npm package by running the command below:

With NPM:

```shell
npm install --save utilia
```

With Yarn:

```shell
yarn add utilia
```

## Table of Contents

- [Captcha](#Captcha)
- [QRCode](#QRCode)

# Captcha

Generates a captcha value and an image

Example:

```js
const { Captcha } = require('utilia')

// New Captcha Client
const captcha = new Captcha()

// Outputs the value of the image
console.log(captcha.value)
```

# QRCode

```js
const { QRCode } = require('utilia')

// New QRCode Client
const qr = new QRCode({
    // Data - your url
    data: "owenpotent.xyz"
})

// Generate the QRCode link
const qrcode = qr.genQR()

// Outputs the qrcode link
console.log(qrcode)
```

## More coming soon!