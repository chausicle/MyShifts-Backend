exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shifts').del()
    .then(function () {
      // Inserts seed entries
      return knex('shifts').insert([
        {id: 1, start_time: '9:00', end_time: '14:00'},
        {id: 2, start_time: '11:00', end_time: '16:00'},
        {id: 3, start_time: '13:00', end_time: '19:00'},
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('shifts_id_seq', (SELECT MAX(id) FROM shifts));`
      )
    })
}
