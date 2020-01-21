const express = require("express");
const router = express.Router();
const cars = require("../helpers/car-models");
const {} = require("../middleware/car-middleware");

router.get("/api/cars", (req, res) => {
  cars
    .getAllCars()
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(error => {
      res.status(500).json(`Error collecting cars data`);
    });
});

router.get("", (req, res) => {});

router.post(
  "",

  (req, res) => {}
);

router.put(
  "",

  (req, res) => {}
);

router.delete("", (req, res) => {});

module.exports = router;
