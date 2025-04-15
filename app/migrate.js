const connection = require("./models/db");
const User = require("./models/user");


connection
  .sync({
    alter: true,
  })
  .then(() => console.log("Database synced"))
  .then(() => connection.close());
