const knex = require('./db')

const getRequests = () => {
  console.log("in main.js");
  return knex('requests')
    .select('')
}

const getUserShifts = () => {
  return knex('user_shifts')
    .select('')
}

const takeShift = (id) => {
  const shift_id = id

  return knex
    .insert({ shift_id })
    .into('user_shifts')
    .returning('*')
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

const deleteUserShift = (id) => {
  console.log(id, "knex id");
  return knex('user_shifts')
    .delete()
    .returning('*')
    .where({ id })
}

module.exports = {
  getRequests,
  getUserShifts,
  getById,
  takeShift,
  createRequest,
  deleteRequest,
  changeShift,
  deleteUserShift
}
