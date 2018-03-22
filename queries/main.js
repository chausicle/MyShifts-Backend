const knex = require('./db')

const getAll = () => {
  console.log("in main.js");
  return knex('requests')
    .select('')
}

const getById = () => {
  // return knex
}

const createRequest = (userId, shiftId) => {
 
  const employee_id = userId
  const shift_id = shiftId

  return knex
    .insert({employee_id, shift_id})
    .into('requests')
    .returning('*')
}

const deleteRequest = (id) => {
  return knex('requests')
    .where('id', id)
    .del()
}


const changeShift = () => {

}

const deleteShift = () => {

}

module.exports = {
  getAll,
  getById,
  createRequest,
  deleteRequest,
  changeShift,
  deleteShift
}
