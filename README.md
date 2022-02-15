[![NPM](https://nodei.co/npm/utilia.png)](https://nodei.co/npm/utilia/)

# Utilia

An NPM package for you to use on your Discord Bot or JavaScript projects! This is still however in development and countless of errors have been encountered, if you wish to help me add features, make a pull request at the github page!

## What's New?

### Added:

#### **Functions**

- checkForContents | This function checks if a file or directory exists.

  ```js
  const fs = require("fs");
  const { checkForContents } = require("utilia");

  const file = "./test.txt";

  // Check for file
  checkForContents(file, "file");
  ```

- getAllFiles | This function returns all files in a directory.

  ```js
  const { getAllFiles } = require("utilia");

  console.log(getAllFiles("./"));
  ```

  Output:

  ```
  [
    "./README.md",
    "./package.json",
    "./package-lock.json",
    "./test.txt"
  ]
  ```

#### **Classes**

    - Embedder | This class is an extended class of the Discord.js Embed class.

    ```js
      const { Embedder } = require("utilia");

      const options = {
          useCodeblockInDescription: true,
          useBoldInDescription: true,
          useTimestamp: true
      }

        const embedder = new Embedder(options);
        const embed = embedder.createEmbed({
            title: "Test",
            description: "This is a test",
            color: "red"
        });

        console.log(embed);
    ```

## Getting Started

To get started, install the npm package by running the command below:

With NPM:

```shell
npm install --save utilia
```

With Yarn:

```shell
yarn add utilia
```

# Additional Info

Utilia.Embedder - A custom but more cleaner embed feature highly inspired from the [discord.js](https://discord.js.org) MessageEmbed class.  
Utilia.hasNitro - Typescript support from the original feature by @thehackerboi69's [discord-premium-utils](https://www.npmjs.com/package/discord-premium-utils) dependency.

# Links

- [Source Code](https://github.com/OwenPotent/utilia)
- [Documentation](https://owenpotent.github.io/utilia)

## More coming soon!
