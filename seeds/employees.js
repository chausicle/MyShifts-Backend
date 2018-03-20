exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      // Inserts seed entries
      return knex('employees').insert([
        {id: 1, first_name: 'Justin', last_name: 'Chau'},
        {id: 2, first_name: 'Betty', last_name: 'Chow'},
        {id: 3, first_name: 'Brady', last_name: 'Aalborg'},
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('employees_id_seq', (SELECT MAX(id) FROM employees));`
      )
    })
}
