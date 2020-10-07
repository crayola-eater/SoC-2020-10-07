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
