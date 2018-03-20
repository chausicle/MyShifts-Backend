
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shifts', table => {
    table.increments('id')
    table.string('start_time').notNullable().defaultsTo('')
    table.string('end_time').notNullable().defaultsTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shifts')
};
