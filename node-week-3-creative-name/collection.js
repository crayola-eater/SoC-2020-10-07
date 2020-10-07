// 👉 1a. Create a file called `index.js`. In this file, start by creating a variable `myCollection` as an array of objects. Each object should be something you like to collect and should contain the name of the item in your collection, how many you have, and what you like about it.
// 👉 2a. Create a new file in the same folder called collection.js. Cut and paste your `myCollection` array from `index.js` to collection.js instead.
const myCollection = [
  {
    name: "some_item",
    count: 2,
    whatILike: "It's just some item.",
  },
  {
    name: "some_other_item",
    count: 3,
    whatILike: "It's great.",
  },
  {
    name: "yet_another_item",
    count: 1,
    whatILike: "I like it.",
  },
  {
    name: "another_item",
    count: 5,
    whatILike: "It's awesome.",
  },
];

// 👉 2b. Use Node's exporting syntax in collection.js to export the `myCollection` variable so that it's ready to import elsewhere in your folder. Remember that you can check the docs if you can't remember the syntax!
module.exports = myCollection;
