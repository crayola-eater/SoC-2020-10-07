/*
  To the docs! Use the [Suggested Project Structure](https://node-postgres.com/guides/project-structure) page in the `node-postgres` docs to guide you in setting up your `db/index.js` file. You'll need to:

  - Require the `pg` package, destructuring out `Pool`
  - Instantiate a `new Pool(settings)` as the variable `pool`
  - Hand in to Pool an object with the settings for the database using the [programmatic section about connecting here](https://node-postgres.com/features/connecting) to help.
  - Set up your `module.exports` to export an object that has a key of `query` and a function as its value that takes in texts, params, and callback and hands these to the query method of pool
*/

const { Pool } = require("pg");

const config = require("dotenv").config();
if (config.error) {
  throw config.error;
}

// https://devcenter.heroku.com/articles/connecting-to-heroku-postgres-databases-from-outside-of-heroku#credentials
const pool = new Pool({
  user: config.PGUSER,
  host: config.PGHOST,
  database: config.PGDATABASE,
  password: config.PGPASSWORD,
  port: config.PGPORT,
  ssl: {
    // Think below is unsafe (since we lose TLS)
    // but is okay since today was just an example
    // and more about connecting to the remote DB
    // and executing queries.
    rejectUnauthorized: false,
  },
});

module.exports.query = pool.query.bind(pool);
