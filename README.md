# Utilia

[![NPM](https://nodei.co/npm/utilia.png)](https://nodei.co/npm/utilia/)

Utilia is an NPM package for use in Discord Bot or JavaScript projects. It is still in development, and if you encounter any errors or would like to contribute, please make a pull request on the [GitHub page](https://github.com/OwenPotent/utilia)!

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