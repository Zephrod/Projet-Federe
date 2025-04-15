const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("app", "root", "password", {
  host: "db",
  dialect: "mysql",
  port: 3306,
  logging: false,
});

sequelize.authenticate()
  .then(() => console.log("✅ Connected to DB"))
  .catch(err => console.error("❌ Failed to connect:", err));

module.exports = sequelize;