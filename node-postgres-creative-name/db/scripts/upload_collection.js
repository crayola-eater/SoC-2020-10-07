/*
  👉 Make another file in `scripts` called `upload_collection.js`. In this file:

    - Require your `query` from `db/index.js`.
    - Require your `collection` array from the collection file.
    - Make an asynchronous function called `populateTable`.
    - In the body of the function loop through the `collection` array.
    - Within the loop, await the query function and store this in the variable 'res'.
    - As the first argument in the query function, hand in the relevant SQL query syntax to insert that object's properties into the relevant columns in the `posts` table. Remember to use [paramaterised queries](https://node-postgres.com/features/queries) ($ syntax) for each value being passed in (e.g. $1, $2, etc.)
    - As the second argument in the query function, add in an array of the object's properties to be passed in. Make sure they're in the same order that the SQL query expects them.
    - console.log the result
*/

const { query } = require("../index");
const collection = require("../collection");

const populateTable = async () => {
  for (const { name, count, whatILike } of collection) {
    const res = await query(
      `
      INSERT INTO my_collection (name, count, whatILike)
        VALUES ($1, $2, $3)
      `,
      [name, count, whatILike]
    );
    console.log(res);
  }
};

populateTable(collection);
