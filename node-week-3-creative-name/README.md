# Intro to Node

Node JS gives us the power to take JavaScript out of the browser - this means we're able to use it in servers and on the back end.

Let's try it out now by making a simple Node app. Everyone has something they collect, no matter how mundane or kooky. As fun as it to talk about our collection, we're busy people! Let's make an app that automates talking about all the nice things in our collection for us in a cool, colorful way.

## Part 1: Setting up and running code in Node

👉 1a. Create a file called `index.js`. In this file, start by creating a variable `myCollection` as an array of objects. Each object should be something you like to collect and should contain the name of the item in your collection, how many you have, and what you like about it. For example, if my collection was about my collection of cute mugs, my first object within my `myCollection` array would be:

```js
{
    name: 'School of Code mug',
    count: 1,
    whatILike: 'It has my cute pixel character on it!'
}
```

👉 1b. Now make a function called `describeCollection` that takes in the array. The function should loop through the array, and for each object, it should console.log a message according to how many you have in your collection. If there's only one of the item in your collection, it should log "I have a `name` in my collection. Here's what I like about it: `whatILike`". If you have more than one of it, the message should log "I have `count` `name`s in my collection. Here's what I like about them: `whatILike`".

For example, for my mug collection with the example above, the first console.log would be: \
_"I have a School of Code mug in my collection. Here's what I like about it: It has my cute pixel character on it!"_

Call your function below where you've defined it, handing in the `myCollection` array.

👉 1c. Run your `index.js` with node in your terminal (using the command `node index.js`) and check that it console.logs out the correct message for each item in your collection (AKA each object in your `myCollection` array).

## Part 2: Exporting and importing

Now let's neaten things up by moving the `myCollection` array to its own file. With Node's power to export and import, everything doesn't have to all be in one file, which makes for cleaner, more readable code.

👉 2a. Create a new file in the same folder called collection.js. Cut and paste your `myCollection` array from `index.js` to collection.js instead.

_Note: Only move the myCollection variable! Keep where the describeCollection function is defined and called in `index.js`._

👉 2b. Use Node's exporting syntax in collection.js to export the `myCollection` variable so that it's ready to import elsewhere in your folder. Remember that you can check the docs if you can't remember the syntax!

👉 2c. Now import `myCollection` at the top of `index.js`. You should be able to then call your function just as you did in part 1, but this time using `myCollection` imported from its separate file.

Use Node to run the `index.js` file again just to check that your console.logs are still coming through correctly!

## Part 3: NPM and Node packages

Now let's bring in the power of NPM (Node Package Manager), a platform where people publish Node packages, which are bundles of software that you can use NPM to import into and use in your own projects. We'll use the `chalk` module to make our console.log messages a little more snazzy! 💅🌈✨

👉 3a. Use the terminal to initialize your project folder as an NPM project like we did in class. If you can't remember the command, no worries - you can always search for it on Google!

👉 3b. Use the [chalk docs](https://www.npmjs.com/package/chalk) to find out how to install `chalk` to your project (check your dependencies in your `package.json` file if you want to check that you've installed it correctly). Follow the docs to also require chalk into `index.js` so you can use it.

👉 3c. Use `chalk` to do the following in your console.logs within `describeCollection`:

- Make the name of each item in your collection cyan
- Make the count of each item in your collection yellow
- Make what you like about each item in your collection green

## Bonus

🌟 Dig a bit deeper into the `chalk` module's docs and jazz up your console.logs even further, including making text bold and adding background colors as well.

🌟 There are all sorts of handy packages on the NPM website that you can use in your code. Use the docs [here](https://www.npmjs.com/package/rtrim) to see what `rtrim` does, install `rtrim`, and require it into your `index.js` file. Experiment with adding symbols and spaces to the begining and end of strings within your objects in your `myCollection` array and using `rtrim` to clean that up in the console.log messages.

For example, if I changed my earlier mug object example to this:

```js
{
    name: '     School of Code mug           ',
    count: 1,
    whatILike: 'It has my cute pixel character on it!'
}
```

I can tell `rtrim` to get rid of those ugly spaces around the name before it prints in the console.log.

🌟 If you're still hungry for more NPM practice, check out [this list](https://github.com/parro-it/awesome-micro-npm-packages) of small, easy-to-manage NPM packages and experiment! 🧪
