
exports.seed = function(knex) {
   // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 'A12345', model: 'Corola', make: 'Toyota', mileage: '50,000', titleStatus: 'Salvaged', transmissionType: '6-speed Automatic'},
        {VIN: 'B12345', model: 'Corola', make: 'Toyota', mileage: '50,000', titleStatus: 'Salvaged', transmissionType: '6-speed Automatic'},
        {VIN: 'C12345', model: 'Corola', make: 'Toyota', mileage: '50,000', titleStatus: 'Salvaged', transmissionType: '6-speed Automatic'}
      ]);
    });
};
