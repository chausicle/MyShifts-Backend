
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_shifts').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_shifts').insert([
        {id: 1, shift_id: 1, request_id: 1},
        {id: 2, shift_id: 4, request_id: 2},
        {id: 3, shift_id: 8, request_id: 0},
        {id: 4, shift_id: 11, request_id: 4},
        {id: 5, shift_id: 15, request_id: 5},
        {id: 6, shift_id: 18, request_id: 6},
        {id: 7, shift_id: 19, request_id: 7},
        {id: 8, shift_id: 22, request_id: 8}
      ]);
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('requests_id_seq', (SELECT MAX(id) FROM requests));`
      )
    })
};
