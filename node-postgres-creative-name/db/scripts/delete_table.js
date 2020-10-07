const { query } = require("../index");

const deleteTable = async () => {
  const result = await query("DROP TABLE IF EXISTS my_collection");
  console.log(result);
};

deleteTable();
