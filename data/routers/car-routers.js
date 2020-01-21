const express = require("express");
const router = express.Router();
const cars = require("../helpers/car-models");
const {
  validateId,
  validateBodyFull,
  validateUniqueVIN
} = require("../middleware/car-middleware");

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

router.get("/api/cars/:id", validateId, (req, res) => {
  cars
    .getCarById(req.params.id)
    .then(car => {
      res.status(200).json(car);
    })
    .catch(error => {
      res.status(500).json(`Error collecting car data`);
    });
});

router.post("/api/cars", validateBodyFull, validateUniqueVIN, (req, res) => {
  cars
    .insertNewCar(req.body)
    .then(car => {
      res.status(202).json(car);
    })
    .catch(error => {
      res.status(500).json(`Error adding new car data`);
    });
});

router.put(
  "/api/cars/:id",
  validateId,
  validateBodyFull,
  validateUniqueVIN,
  (req, res) => {
    cars
      .updateCarById(req.params.id, req.body)
      .then(updated => {
        res.status(200).json(`Car data have been updated`);
      })
      .catch(error => {
        res.status(500).json(`Error updating car data`);
      });
  }
);

router.delete("/api/cars/:id", validateId, (req, res) => {
  cars
    .deleteCarById(req.params.id)
    .then(deleted => {
      res.status(200).json(`Car data have been deleted`);
    })
    .catch(error => {
      res.status(500).json(`Error deleting car data`);
    });
});

module.exports = router;
