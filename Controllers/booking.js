const express = require("express");
const Bookings = require("../Model/booking");

const router = express();

router.post("/add-booking", (req, res, next) => {
  res.redirect("/booking-page");
  Bookings.create(req.body);
});

router.post("/edit-booking", (req, res, next) => {
  res.redirect("/booking-page");
  Bookings.update(req.body, { where: { id: req.body.id } });
  console.log(req.body);
});

router.get("/get-booking", async (req, res, next) => {
  try {
    const bookingData = await Bookings.findAll();
    const bookingArray = bookingData.map((books) => books.toJSON());
    res.send(bookingArray);
  } catch (err) {
    res.send([]);
    console.log(err);
  }
});

router.delete("/delete-booking", async (req, res, next) => {
  await Bookings.destroy({ where: { id: req.body.id } });
  res.send("Delete Done");
});

module.exports = router;
