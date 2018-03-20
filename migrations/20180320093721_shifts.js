
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shifts', table => {
    table.increments('id')
    table.date('date').notNullable()
    table.time('start').notNullable()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shifts')
};
