
exports.up = function(knex, Promise) {
  return knex.schema.createTable('requests', table => {
    table.increments('id')
    table.integer('employee_id').notNullable()
    table.integer('shift_id').notNullable()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('requests')
};
