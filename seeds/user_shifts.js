
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_shifts').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_shifts').insert([
        {id: 1, shift_id: 1},
        {id: 2, shift_id: 2},
        {id: 3, shift_id: 3}
      ]);
    });
};
