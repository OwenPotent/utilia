# Utilia

[![NPM](https://nodei.co/npm/utilia.png)](https://nodei.co/npm/utilia/)

Utilia is an NPM package for use in Discord Bot or JavaScript projects. It is still in development, and if you encounter any errors or would like to contribute, please make a pull request on the [GitHub page](https://github.com/OwenPotent/utilia)!

For more information, please visit the [documentation](https://owenpotent.github.io/utilia).

## Table of Contents

- [Utilia](#utilia)
  - [Table of Contents](#table-of-contents)
  - [What's New?](#whats-new)
    - [Added:](#added)
      - [DATABASE](#database)
      - [CHANNELCREATOR](#channelcreator)
      - [EXTRAEMBED](#extraembed)
  - [Getting Started](#getting-started)
  - [Additional Information](#additional-information)
    - [Links](#links)
      - [Made with ❤️ by OwenPotent](#made-with-️-by-owenpotent)

## What's New?

### Added:

#### DATABASE

- `UtiliaDB`: This class is somewhat of an inspiration of the `quick.db` package. It is a simple database that can store data in JSON format. It is not recommended to use this database for large projects, as it is not optimized for that.

  ```js
  const { UtiliaDB } = require("utilia");

  // Create a new database
  const db = new UtiliaDB("database.json");

  // Create a table
  db.insert("users", {
    id: "1234567890",
    name: "Owen",
    age: 16
  });

  db.find("users", "1234567890"); // { id: "1234567890", name: "Owen", age: 16 }

  db.update("users", "1234567890", {
    name: "Owen Potent"
  });

  db.delete("users", "1234567890");

  db.filter("users", (user) => user.age > 16); // [{ id: "1234567890", name: "Owen Potent", age: 17 }]
  
  db.createBackup("users"); // Creates a backup of the users table

  db.removeDatabase(); // Removes the database file
  ```

#### CHANNELCREATOR

- `ChannelCreator`: This class is used to create channels in a guild. It is very simple and easy to use for your discord bot. This class is still in development, and will be updated with more features in the future.

  ```js
  const { ChannelCreator } = require("utilia");

  // Create a new channel creator
  const channelCreator = new ChannelCreator();

  // Create a text channel
  channelCreator.createTextChannel(message.guild, "Hello World");

  // Create a voice channel
  channelCreator.createVoiceChannel(message.guild, "Hello World");

  // Create a category
  channelCreator.createCategory(message.guild, "Hello World");

  // Delete a channel
  channelCreator.deleteChannel(message.guild.channels.cache.get("1234567890"));

  // Rename a channel
  channelCreator.renameChannel(message.guild.channels.cache.get("1234567890"), "Hello World");

  // Move a channel
  channelCreator.moveChannel(message.guild.channels.cache.get("1234567890"), message.guild.categories.cache.get("1234567890"));
  ```

#### EXTRAEMBED

- `ExtraEmbed`: This class is an extension of the `discord.js` `EmbedBuilder` class. It adds some extra features to the embed class.

  ```js
  const { ExtraEmbed } = require("utilia");

  // Create a new embed
  const embed = new ExtraEmbed(
    color: "Random",
    options:  {
      timestamp: true,
      author:   {
        data: {
          name: "test",
          url?: "https://example.com",
          icon_url?: "https://example.com"
        }
      },
      footer:   {
        data: {
          text: "test",
          icon_url?: "https://example.com"
        }
      },

      // Setting a codeblock beforehand
      codeblocks?: {
        language?: "js",
      }
    }
  );

  // Manually set a codeblock
  embed.setDescription("Hello World", true, "js");
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