exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      // Inserts seed entries
      return knex('employees').insert([
        {id: 1, first_name: 'Justin', last_name: 'Chau', email: 'chausicle@gmail.com', password: '$2a$10$XZy.K0jMiVdaK86AG8BkL.WI9MWrEEpPwyhwzMhlxoQWgKHkT9eua'},
        {id: 2, first_name: 'Betty', last_name: 'Chow', email: 'bettychchow@gmail.com', password: '$2a$10$S2skz5WRayhOs2Da/SLm4.INe.zRGPcCFMzk/kviYDeiLif5CAA6a'},
        {id: 3, first_name: 'Brady', last_name: 'Aalborg', email: 'vanderbannond@gmail.com', password: '$2a$10$14o31r47aXZyDAG60Lz/teGuzZJivHisBkn3zsymswJU.VxdZK1Ji'},
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('employees_id_seq', (SELECT MAX(id) FROM employees));`
      )
    })
}
