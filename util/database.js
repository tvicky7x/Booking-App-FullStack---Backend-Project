const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  database: "node-booking-sql",
  host: "localhost",
  username: "root",
  password: "tvicky.123",
});

module.exports = sequelize;
