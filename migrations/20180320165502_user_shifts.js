
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_shifts', table => {
    table.increments('id')
    table.integer('shift_id').notNullable()
    table.integer('request_id').notNullable().defaultsTo(0)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_shifts')
};
