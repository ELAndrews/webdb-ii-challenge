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

router.get("/api/cars/:id", (req, res) => {
  cars
    .getCarById(req.params.id)
    .then(car => {
      res.status(200).json(car);
    })
    .catch(error => {
      res.status(500).json(`Error collecting car data`);
    });
});

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
