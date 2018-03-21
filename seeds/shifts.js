exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shifts').del()
    .then(function () {
      // Inserts seed entries
      return knex('shifts').insert([
        {id: 1, date: '2018-03-21', start: '09:00'},
        {id: 2, date: '2018-03-21', start: '13:00'},
        {id: 3, date: '2018-03-22', start: '17:00'},
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('shifts_id_seq', (SELECT MAX(id) FROM shifts));`
      )
    })
}
