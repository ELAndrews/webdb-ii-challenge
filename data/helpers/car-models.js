const db = require("../dbConfig");

function getAllCars() {
  return db("cars");
}

module.exports = { getAllCars };
