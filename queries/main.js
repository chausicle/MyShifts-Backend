const knex = require('./db')

getAll = () => {
  console.log("in main.js");
  return knex('requests')
    .select('')
}

getById = () => {
  // return knex
}

create = () => {

}

changeShift = () => {

}

deleteShift = () => {

}

module.exports = {
  getAll,
  getById,
  create,
  changeShift,
  deleteShift
}
