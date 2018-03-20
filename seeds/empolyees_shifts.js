
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees_shifts').del()
    .then(function () {
      // Inserts seed entries
      return knex('employees_shifts').insert([
        {employee_id: 1, shift_id: 1},
        {employee_id: 2, shift_id: 2},
        {employee_id: 3, shift_id: 3}
      ])
    })
}
