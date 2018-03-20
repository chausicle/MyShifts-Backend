
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shifts', table => {
    table.increments('id')
    table.date('date').notNullable().defaultsTo('')
    table.time('start').notNullable().defaultsTo('')
    table.time('end').notNullable().defaultsTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shifts')
};
