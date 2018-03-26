
exports.seed = function(knex, Promise) {
  return knex('requests').del()
    .then(function () {
      return knex('requests').insert([
        {id: 1, employee_id: 1, shift_id: 1, start: '10:00', date: '2018-03-21'},
        {id: 2, employee_id: 1, shift_id: 4, start: '10:00', date: '2018-03-22'},
        {id: 3, employee_id: 2, shift_id: 11, start: '14:00', date: '2018-03-24'},
        {id: 4, employee_id: 1, shift_id: 11, start: '14:00', date: '2018-03-24'},
        {id: 5, employee_id: 2, shift_id: 15, start: '18:00', date: '2018-03-25'},
        {id: 6, employee_id: 1, shift_id: 18, start: '18:00', date: '2018-03-26'},
        {id: 7, employee_id: 1, shift_id: 19, start: '10:00', date: '2018-03-27'},
        {id: 8, employee_id: 1, shift_id: 22, start: '10:00', date: '2018-03-28'},
        {id: 9, employee_id: 2, shift_id: 2, start: '14:00', date: '2018-03-21'},
        {id: 10, employee_id: 3, shift_id: 3, start: '18:00', date: '2018-03-21'},
        {id: 11, employee_id: 2, shift_id: 5, start: '14:00', date: '2018-03-22'},
        {id: 12, employee_id: 3, shift_id: 6, start: '18:00', date: '2018-03-22'},
        {id: 13, employee_id: 2, shift_id: 7, start: '10:00', date: '2018-03-23'},
        {id: 14, employee_id: 3, shift_id: 9, start: '18:00', date: '2018-03-23'}
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('requests_id_seq', (SELECT MAX(id) FROM requests));`
      )
    })
}
