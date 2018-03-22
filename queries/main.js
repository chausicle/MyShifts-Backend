const knex = require('./db')

getAll = () => {
  console.log("in main.js");
  return knex('requests')
    .select('')
}

getById = () => {
  // return knex
}

takeShift = (id) => {
  const shift_id = id

  return knex
    .insert({ shift_id })
    .into('user_shifts')
    .returning('*')
}

changeShift = () => {

}

deleteShift = () => {

}

module.exports = {
  getAll,
  getById,
  takeShift,
  changeShift,
  deleteShift
}
