const knex = require('./db')

const getAll = () => {
  console.log("in main.js");
  return knex('requests')
    .select('')
}

const getById = () => {
  // return knex
}

const takeShift = (id) => {
  const shift_id = id

  return knex
    .insert({ shift_id })
    .into('user_shifts')
    .returning('*')
}

const deleteShift = () => {

}

module.exports = {
  getAll,
  getById,
  takeShift,
  deleteShift
}
