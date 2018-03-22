
exports.seed = function(knex, Promise) {
  return knex('requests').del()
    .then(function () {
      return knex('requests').insert([
        {id: 1, employee_id: 1, shift_id: 1, start: '10:00', date: '2018-03-21'},
        {id: 2, employee_id: 1, shift_id: 2, start: '14:00', date: '2018-03-21'},
        {id: 3, employee_id: 1, shift_id: 3, start: '18:00', date: '2018-03-22'},
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('requests_id_seq', (SELECT MAX(id) FROM requests));`
      )
    })
}
