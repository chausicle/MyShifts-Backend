const knex = require('./db')

const getRequests = () => {
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

const createRequest = (employeeId, shiftId, start, date) => {
  const employee_id = employeeId
  const shift_id = shiftId

  return knex
    .insert({employee_id, shift_id, start, date })
    .into('requests')
    .returning('*')
}

const deleteRequest = (id) => {
  return knex('requests')
    .where('id', id)
    .del()
}

const deleteUserShift = (id) => {
  return knex('user_shifts')
    .delete()
    .returning('*')
    .where({ id })
}

module.exports = {
  getRequests,
  getUserShifts,
  takeShift,
  createRequest,
  deleteRequest,
  deleteUserShift
}
