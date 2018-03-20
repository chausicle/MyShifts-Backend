
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees_shifts', table => {
    table.integer('employee_id').notNullable()
    table.integer('shift_id').notNullable()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employees_shifts')
};
