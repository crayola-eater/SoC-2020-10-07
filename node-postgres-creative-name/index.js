/*
  👉 Create an `index.js` file at the top level of your project.

  👉 Require your query function.

  👉 Write a function that uses your query function to select all the items in your collection and console.log the result.

  👉 Add a script to your `package.json` to run your file with `npm run start`.
*/

const { query } = require("./db/index");

const getAllItems = async () => {
  const result = await query("SELECT * FROM my_collection");
  console.log(result);
};

getAllItems();
