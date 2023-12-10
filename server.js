// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bookingRoute = require("./Controllers/booking");

const sequelize = require("./util/database");
const Bookings = require("./Model/booking");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(bookingRoute);

const PORT = process.env.PORT || 5000;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
