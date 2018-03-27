
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees_shifts').del()
    .then(function () {
      // Inserts seed entries
      return knex('employees_shifts').insert([
        {employee_id: 1, shift_id: 1},
        {employee_id: 1, shift_id: 4},
        {employee_id: 1, shift_id: 8},
        {employee_id: 1, shift_id: 11},
        {employee_id: 1, shift_id: 15},
        {employee_id: 1, shift_id: 18},
        {employee_id: 1, shift_id: 19},
        {employee_id: 1, shift_id: 22},
        {employee_id: 2, shift_id: 2},
        {employee_id: 3, shift_id: 3},
        {employee_id: 2, shift_id: 5},
        {employee_id: 3, shift_id: 6},
        {employee_id: 2, shift_id: 7},
        {employee_id: 3, shift_id: 9},
        {employee_id: 1, shift_id: 23},
        {employee_id: 2, shift_id: 24},
        {employee_id: 3, shift_id: 25},
        {employee_id: 2, shift_id: 26},
        {employee_id: 1, shift_id: 27},
        {employee_id: 2, shift_id: 28},
        {employee_id: 1, shift_id: 29},
        {employee_id: 3, shift_id: 30},
        {employee_id: 3, shift_id: 31},
        {employee_id: 2, shift_id: 32},
        {employee_id: 1, shift_id: 33}
      ])
    })
}
