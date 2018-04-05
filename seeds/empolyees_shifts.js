
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
        {employee_id: 1, shift_id: 33},
        {employee_id: 1, shift_id: 34},
        {employee_id: 2, shift_id: 35},
        {employee_id: 3, shift_id: 36},
        {employee_id: 2, shift_id: 37},
        {employee_id: 1, shift_id: 38},
        {employee_id: 3, shift_id: 39},
        {employee_id: 3, shift_id: 40},
        {employee_id: 2, shift_id: 41},
        {employee_id: 1, shift_id: 42},
        {employee_id: 1, shift_id: 43},
        {employee_id: 2, shift_id: 44},
        {employee_id: 3, shift_id: 45},
        {employee_id: 1, shift_id: 46},
        {employee_id: 2, shift_id: 47},
        {employee_id: 3, shift_id: 48},
        {employee_id: 3, shift_id: 49},
        {employee_id: 1, shift_id: 50},
        {employee_id: 2, shift_id: 51},
        {employee_id: 2, shift_id: 52},
        {employee_id: 3, shift_id: 53},
        {employee_id: 1, shift_id: 54},
        {employee_id: 1, shift_id: 55},
        {employee_id: 2, shift_id: 56},
        {employee_id: 3, shift_id: 57},
        {employee_id: 2, shift_id: 58},
        {employee_id: 3, shift_id: 59},
        {employee_id: 1, shift_id: 60},
        {employee_id: 3, shift_id: 61},
        {employee_id: 1, shift_id: 62},
        {employee_id: 2, shift_id: 63},
        {employee_id: 1, shift_id: 64},
        {employee_id: 2, shift_id: 65},
        {employee_id: 3, shift_id: 66},
        {employee_id: 1, shift_id: 67},
        {employee_id: 2, shift_id: 68},
        {employee_id: 3, shift_id: 69},
        {employee_id: 1, shift_id: 70},
        {employee_id: 2, shift_id: 71},
        {employee_id: 3, shift_id: 72},
        {employee_id: 3, shift_id: 73},
        {employee_id: 1, shift_id: 74},
        {employee_id: 2, shift_id: 75},
        {employee_id: 2, shift_id: 76},
        {employee_id: 3, shift_id: 77},
        {employee_id: 1, shift_id: 78},
        {employee_id: 1, shift_id: 79},
        {employee_id: 2, shift_id: 80},
        {employee_id: 3, shift_id: 81},
        {employee_id: 2, shift_id: 82},
        {employee_id: 3, shift_id: 83},
        {employee_id: 1, shift_id: 84},
        {employee_id: 3, shift_id: 85},
        {employee_id: 1, shift_id: 86},
        {employee_id: 2, shift_id: 87},
        {employee_id: 1, shift_id: 88},
        {employee_id: 2, shift_id: 89},
        {employee_id: 3, shift_id: 90},
        {employee_id: 1, shift_id: 91},
        {employee_id: 2, shift_id: 92},
        {employee_id: 3, shift_id: 93},
        {employee_id: 3, shift_id: 94},
        {employee_id: 1, shift_id: 95},
        {employee_id: 2, shift_id: 96},
        {employee_id: 1, shift_id: 97},
        {employee_id: 2, shift_id: 98},
        {employee_id: 3, shift_id: 99},
        {employee_id: 1, shift_id: 100},
        {employee_id: 2, shift_id: 101},
        {employee_id: 3, shift_id: 102},
        {employee_id: 1, shift_id: 103},
        {employee_id: 2, shift_id: 104},
        {employee_id: 3, shift_id: 105}
      ])
    })
}
