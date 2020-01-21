const db = require("../dbConfig");

function getAllCars() {
  return db("cars");
}

function getCarById(id) {
  return db("cars")
    .where({ id: id })
    .first();
}

module.exports = { getAllCars, getCarById };
