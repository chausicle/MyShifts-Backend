exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shifts').del()
    .then(function () {
      // Inserts seed entries
      return knex('shifts').insert([
        {id: 1, date: '2018-03-21', start: '10:00'},
        {id: 2, date: '2018-03-21', start: '14:00'},
        {id: 3, date: '2018-03-21', start: '18:00'},
        {id: 4, date: '2018-03-22', start: '10:00'},
        {id: 5, date: '2018-03-22', start: '14:00'},
        {id: 6, date: '2018-03-22', start: '18:00'},
        {id: 7, date: '2018-03-23', start: '10:00'},
        {id: 8, date: '2018-03-23', start: '14:00'},
        {id: 9, date: '2018-03-23', start: '18:00'},
        {id: 10, date: '2018-03-24', start: '10:00'},
        {id: 11, date: '2018-03-24', start: '14:00'},
        {id: 12, date: '2018-03-24', start: '18:00'},
        {id: 13, date: '2018-03-25', start: '10:00'},
        {id: 14, date: '2018-03-25', start: '14:00'},
        {id: 15, date: '2018-03-25', start: '18:00'},
        {id: 16, date: '2018-03-26', start: '10:00'},
        {id: 17, date: '2018-03-26', start: '14:00'},
        {id: 18, date: '2018-03-26', start: '18:00'},
        {id: 19, date: '2018-03-27', start: '10:00'},
        {id: 20, date: '2018-03-27', start: '14:00'},
        {id: 21, date: '2018-03-27', start: '18:00'},
        {id: 22, date: '2018-03-28', start: '10:00'},
        {id: 23, date: '2018-03-28', start: '14:00'},
        {id: 24, date: '2018-03-28', start: '18:00'},
        {id: 25, date: '2018-03-29', start: '10:00'},
        {id: 26, date: '2018-03-29', start: '14:00'},
        {id: 27, date: '2018-03-29', start: '18:00'}
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('shifts_id_seq', (SELECT MAX(id) FROM shifts));`
      )
    })
}
