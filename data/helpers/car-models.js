const db = require("../dbConfig");

function getAllCars() {
  return db("cars");
}

function getCarById(id) {
  return db("cars")
    .where({ id: id })
    .first();
}

function insertNewCar({ make, model, vin, mileage, transmissionType, status }) {
  return db("cars").insert({
    make,
    model,
    vin,
    mileage,
    transmissionType,
    status
  });
}

function updateCarById(
  id,
  { make, model, vin, mileage, transmissionType, status }
) {
  return db("cars")
    .where({ id: id })
    .update({ make, model, vin, mileage, transmissionType, status });
}

module.exports = { getAllCars, getCarById, insertNewCar, updateCarById };
