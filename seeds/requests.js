
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
        {id: 7, employee_id: 3, shift_id: 19, start: '10:00', date: '2018-03-27'},
        {id: 8, employee_id: 1, shift_id: 22, start: '10:00', date: '2018-03-28'},
        {id: 9, employee_id: 2, shift_id: 2, start: '14:00', date: '2018-03-21'},
        {id: 10, employee_id: 3, shift_id: 3, start: '18:00', date: '2018-03-21'},
        {id: 11, employee_id: 2, shift_id: 5, start: '14:00', date: '2018-03-22'},
        {id: 12, employee_id: 3, shift_id: 6, start: '18:00', date: '2018-03-22'},
        {id: 13, employee_id: 2, shift_id: 7, start: '10:00', date: '2018-03-23'},
        {id: 14, employee_id: 3, shift_id: 9, start: '18:00', date: '2018-03-23'},
        {id: 15, employee_id: 2, shift_id: 24, start: '18:00', date: '2018-03-28'},
        {id: 16, employee_id: 3, shift_id: 25, start: '10:00', date: '2018-03-29'},
        {id: 17, employee_id: 2, shift_id: 26, start: '14:00', date: '2018-03-29'},
        {id: 18, employee_id: 1, shift_id: 29, start: '14:00', date: '2018-03-30'},
        {id: 19, employee_id: 2, shift_id: 28, start: '10:00', date: '2018-03-30'},
        {id: 20, employee_id: 3, shift_id: 30, start: '18:00', date: '2018-03-30'},
        {id: 21, employee_id: 3, shift_id: 31, start: '10:00', date: '2018-03-31'},
        {id: 22, employee_id: 2, shift_id: 32, start: '14:00', date: '2018-03-31'},
        {id: 23, employee_id: 1, shift_id: 34, start: '10:00', date: '2018-04-01'},
        {id: 24, employee_id: 2, shift_id: 35, start: '14:00', date: '2018-04-01'},
        {id: 25, employee_id: 3, shift_id: 36, start: '18:00', date: '2018-04-01'},
        {id: 26, employee_id: 2, shift_id: 37, start: '10:00', date: '2018-04-02'},
        {id: 27, employee_id: 1, shift_id: 42, start: '18:00', date: '2018-04-03'},
        {id: 28, employee_id: 3, shift_id: 40, start: '10:00', date: '2018-04-03'},
        {id: 29, employee_id: 2, shift_id: 44, start: '14:00', date: '2018-04-04'},
        {id: 30, employee_id: 3, shift_id: 45, start: '18:00', date: '2018-04-04'},
        {id: 31, employee_id: 1, shift_id: 46, start: '10:00', date: '2018-04-05'},
        {id: 32, employee_id: 1, shift_id: 50, start: '14:00', date: '2018-04-06'},
        {id: 33, employee_id: 1, shift_id: 54, start: '18:00', date: '2018-04-07'},
        {id: 34, employee_id: 1, shift_id: 55, start: '10:00', date: '2018-04-08'},
        {id: 35, employee_id: 3, shift_id: 59, start: '14:00', date: '2018-04-09'},
        {id: 36, employee_id: 2, shift_id: 63, start: '18:00', date: '2018-04-10'},
        {id: 37, employee_id: 1, shift_id: 64, start: '10:00', date: '2018-04-11'},
        {id: 38, employee_id: 2, shift_id: 68, start: '14:00', date: '2018-04-12'},
        {id: 39, employee_id: 3, shift_id: 72, start: '18:00', date: '2018-04-13'},
        {id: 40, employee_id: 3, shift_id: 73, start: '10:00', date: '2018-04-14'},
        {id: 41, employee_id: 3, shift_id: 77, start: '14:00', date: '2018-04-15'},
        {id: 42, employee_id: 3, shift_id: 81, start: '18:00', date: '2018-04-16'},
        {id: 43, employee_id: 2, shift_id: 82, start: '10:00', date: '2018-04-17'}
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('requests_id_seq', (SELECT MAX(id) FROM requests));`
      )
    })
}
