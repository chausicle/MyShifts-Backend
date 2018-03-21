
exports.seed = function(knex, Promise) {
  return knex('requests').del()
    .then(function () {
      return knex('requests').insert([
        {id: 1, employee_id: 2, shift_id: 3},
        {id: 2, employee_id: 1, shift_id: 2},
        {id: 3, employee_id: 3, shift_id: 1},
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('requests_id_seq', (SELECT MAX(id) FROM requests));`
      )
    })
}
