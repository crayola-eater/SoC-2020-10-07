const chalk = require("chalk");

const myCollection = require("./collection");

// 👉 1b. Now make a function called `describeCollection` that takes in the array. The function should loop through the array, and for each object, it should console.log a message according to how many you have in your collection. If there's only one of the item in your collection, it should log "I have a `name` in my collection. Here's what I like about it: `whatILike`". If you have more than one of it, the message should log "I have `count` `name`s in my collection. Here's what I like about them: `whatILike`".

// 👉 3c. Use `chalk` to do the following in your console.logs within `describeCollection`:
// - Make the name of each item in your collection cyan
// - Make the count of each item in your collection yellow
// - Make what you like about each item in your collection green
const describeCollection = (someArray) => {
  for (const { name, count, whatILike } of someArray) {
    if (count > 1) {
      console.log(
        `I have ${chalk.yellow(count)} ${chalk.cyan(
          name + "s"
        )} in my collection.`,
        `Here's what I like about them: ${chalk.green(whatILike)}`
      );
    } else {
      console.log(
        `I have a ${chalk.cyan(name)} in my collection.`,
        `Here's what I like about it: ${chalk.green(whatILike)}`
      );
    }
  }
};

describeCollection(myCollection);
