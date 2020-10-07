# Connecting to Postgres with Node.js

In this workshop, we'll be using the `node-postgres` package to allow Node to talk to our database. We will write scripts that execute the SQL queries you've been practicing.

We will be...

- setting up a postgres instance using Heroku
- using the `node-postgres` library to connect to our postgres
- sending a query to create a table in which to store our collection of things from this morning
- sending a query and inserting our collection into the table
- sending a query and reading data from the database

## Setting up a database in the cloud ☁️

The first step is to provision a real life data base! This will be running somewhere in Europe, and we will connect to it using the internet.

👉 Go to [heroku](https://signup.heroku.com/login) and sign up for a free account.

👉 Create a new app, give it a name and select the region as europe.

👉 Navigate to the resources tab of your new app.

👉 In the Add-ons search bar, type postgres and select Heroku Postgres.

👉 Select the `Hobby Dev - Free` plan and click `Submit Order Form`.

We now have a database set up for us to use. Now we need to find the connection settings. We call these credentials.

👉 Click the link to `Heroku Postgres`; this will open a new tab.

👉 Locate your credentials in the settings tab.

## Connecting to Postgres in Node.js

The aim for this section will be to set up our connection to the database we just provisioned. In the file `db/index.js`, we will require the things we need and then export a function that will allow us to send queries to our database throughout our application.

👉 Install the `node-postgres` package via `npm i pg` in your terminal. Once it's installed correctly, it should show up as a dependency in your `package.json`.

Now that we have our package installed, the next step is to set up a `pool`. A connection pool allows you to connect to the database once and then export the ability to query your database. You can then import this query function wherever you need to write a SQL query elsewhere in your application.

👉 To the docs! Use the [Suggested Project Structure](https://node-postgres.com/guides/project-structure) page in the `node-postgres` docs to guide you in setting up your `db/index.js` file. You'll need to:

- Require the `pg` package, destructuring out `Pool`
- Instantiate a `new Pool(settings)` as the variable `pool`
- Hand in to Pool an object with the settings for the database using the [programmatic section about connecting here](https://node-postgres.com/features/connecting) to help.
- Set up your `module.exports` to export an object that has a key of `query` and a function as its value that takes in texts, params, and callback and hands these to the query method of pool

Use the first example on that page in the docs to guide you! Don't worry about the routes and the other examples further down the page.

## Using our query function

Now that we've set up our `pool` and exported our `query` method, we can use it to create our first table. To do this, we'll need to make a file in the `script` folder within `db`.

👉 Make a file within `scripts` called `create_table.js`. In this file:

- Require your `query` from `db/index.js`.
- Make an asynchronous function called `createTable`. In the body of the function, await the query function that we require at the top and store this in a variable `res`.
- As the argument to our query function, hand in the relevant SQL statement to create a table called 'my_collection' that has these columns and data types:
  - `id` (primary key; increments automatically with each new row)
  - `name` (text)
  - `count` (integer)
  - `whatILike` (text)
- console.log the `res` variable
- Call the function `createTable` below where you've defined it.

👉 add a script to your `package.json` that will run `node db/scripts/create_table.js` when you type the command `npm run create-table`.

👉 Run the command `npm run create-table`

Now, when Node runs this file, it will use the query function from your node-postgres pool to run your SQL query to create that table!

## Inserting data

It's time to fill our table with our collection of nice things from this morning.

👉 Copy the file from this morning and place within your project.

👉 Make another file in `scripts` called `upload_collection.js`. In this file:

- Require your `query` from `db/index.js`.
- Require your `collection` array from the collection file.
- Make an asynchronous function called `populateTable`.
- In the body of the function loop through the `collection` array.
- Within the loop, await the query function and store this in the variable 'res'.
- As the first argument in the query function, hand in the relevant SQL query syntax to insert that object's properties into the relevant columns in the `posts` table. Remember to use [paramaterised queries](https://node-postgres.com/features/queries) ($ syntax) for each value being passed in (e.g. $1, $2, etc.)
- As the second argument in the query function, add in an array of the object's properties to be passed in. Make sure they're in the same order that the SQL query expects them.
- console.log the result

👉 Add a script to your `package.json` to run your file with `npm run populate-table`.

## Reading data

👉 Create an `index.js` file at the top level of your project.

👉 Require your query function.

👉 Write a function that uses your query function to select all the items in your collection and console.log the result.

👉 Add a script to your `package.json` to run your file with `npm run start`.

## Bonus:

## More SQL action

🌟 Practice your SQL skills by selecting different items from your collection in index.js

🌟 Look up how to delete a table and create a script which allows you to drop your collection table

## Keeping our database credentials secret

Credentials should be kept secret and not uploaded to GitHub. While it is possible to hard code our connection settings in the code, as we have just done [programmatic section about connecting here](https://node-postgres.com/features/connecting), it is not good practice as if you pushed your code to GitHub and the repo was public, everyone can spam your database! (Luckily our SoC repos are internal!)

- Put your connection settings in a `.env` file and remove the argument to Pool(). Use the `.env.example` as a template.
- Use [dotenv](https://www.npmjs.com/package/dotenv) to put your variables into the environment.
