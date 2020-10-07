/*
  - Require your `query` from `db/index.js`.
  - Make an asynchronous function called `createTable`. In the body of the function, await the query function that we require at the top and store this in a variable `res`.
  - As the argument to our query function, hand in the relevant SQL statement to create a table called 'my_collection' that has these columns and data types:
  - `id` (primary key; increments automatically with each new row)
  - `name` (text)
  - `count` (integer)
  - `whatILike` (text)
  - console.log the `res` variable
  - Call the function `createTable` below where you've defined it.
*/

const { query } = require("../index");

const createTable = async () => {
  const res = await query(`
      CREATE TABLE IF NOT EXISTS my_collection (
        name TEXT,
        count INTEGER,
        whatILike TEXT
      )
  `);
  console.log(res);
};

createTable();
