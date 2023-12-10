const { DataTypes } = require("sequelize");

const sequelize = require("../util/database");

const Bookings = sequelize.define("bookings", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Bookings.sync();
module.exports = Bookings;
