exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          make: "Ford",
          model: "Focus Titanium 2.0",
          vin: "WDC1631131A456569",
          mileage: 79500,
          transmissionType: "Manual",
          status: "clean"
        },
        {
          make: "Alfa Romeo",
          model: "GTV 3.0",
          vin: "WDD2120362B099923",
          mileage: 88500,
          transmissionType: "Manual",
          status: "clean"
        },
        {
          make: "Volkswagen",
          model: "Polo 1.2",
          vin: "MAJ6P1CL7JC219142",
          mileage: 73379,
          transmissionType: "Manual",
          status: "clean"
        }
      ]);
    });
};
