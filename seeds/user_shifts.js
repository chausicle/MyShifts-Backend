
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_shifts').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_shifts').insert([
        {id: 1, shift_id: 1, start: '10:00', date: '2018-03-21' , request_id: 1},
        {id: 2, shift_id: 4, start: '10:00', date: '2018-03-22' , request_id: 2},
        {id: 3, shift_id: 8, start: '14:00', date: '2018-03-23' , request_id: 0},
        {id: 4, shift_id: 11, start: '14:00', date: '2018-03-24' ,request_id: 4},
        {id: 5, shift_id: 14, start: '14:00', date: '2018-03-25' ,request_id: 0},
        {id: 6, shift_id: 18, start: '18:00', date: '2018-03-26' ,request_id: 6},
        {id: 7, shift_id: 19, start: '10:00', date: '2018-03-27' ,request_id: 7},
        {id: 8, shift_id: 22, start: '10:00', date: '2018-03-28' ,request_id: 8},
        {id: 9, shift_id: 23, start: '14:00', date: '2018-03-28' ,request_id: 0},
        {id: 10, shift_id: 27, start: '18:00', date: '2018-03-29' ,request_id: 0},
        {id: 11, shift_id: 29, start: '14:00', date: '2018-03-30' ,request_id: 18},
        {id: 12, shift_id: 33, start: '18:00', date: '2018-03-31' ,request_id: 0},
        {id: 13, shift_id: 34, start: '10:00', date: '2018-04-01' ,request_id: 23},
        {id: 14, shift_id: 38, start: '14:00', date: '2018-04-02' ,request_id: 0},
        {id: 15, shift_id: 42, start: '18:00', date: '2018-04-03' ,request_id: 27},
        {id: 16, shift_id: 43, start: '10:00', date: '2018-04-04' ,request_id: 0},
        {id: 17, shift_id: 46, start: '10:00', date: '2018-04-05' ,request_id: 0}
      ]);
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('requests_id_seq', (SELECT MAX(id) FROM requests));`
      )
    })
};
