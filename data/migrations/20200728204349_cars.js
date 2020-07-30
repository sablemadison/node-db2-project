
exports.up = function(knex) {
    return knex.schema.createTable('cars', (table) => {
        table.increments();
        table.string('VIN').notNullable().unique();
        table.string('model', 150).notNullable();
        table.string('make', 150).notNullable()
        table.integer('mileage').notNullable();
        table.string('titleStatus').nullable()
        table.string('transmissionType').nullable();
        
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
  };
  