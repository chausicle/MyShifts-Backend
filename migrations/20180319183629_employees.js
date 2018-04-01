
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', table => {
    table.increments('id')
    table.string('first_name').notNullable().defaultsTo('')
    table.string('last_name').notNullable().defaultsTo('')
    table.string('email').notNullable().defaultsTo('')
    table.string('password').defaultsTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employees')
};
