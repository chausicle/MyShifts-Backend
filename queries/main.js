const knex = require('./db')

const getRequests = () => {
  // get requests with nested employees
  let result
  return knex('requests')
    .select('')
    .then(requestArray => {
      result = requestArray

      return knex('employees')
        .then(employeeArray => {

          result.forEach((request, index) => {
            result[index].employees = employeeArray.filter(employee => request.employee_id === employee.id)
          })
          return result
        })
    })
}

const getUserShifts = () => {
  return knex('user_shifts')
    .select('')
}

const getOneShift = (id) => {
  return knex('shifts')
    .select('start', 'date')
    .where('id', id)
}

const takeShift = (shift_id, start, date, request_id) => {

  console.log(shift_id, start, date, request_id)
  return knex('user_shifts')
    .insert({ shift_id, start, date, request_id })
    .returning('*')
}

const releaseShift = (shift_id, request_id) => {
  return knex('user_shifts')
    .where('shift_id', shift_id)
    .update({ request_id })
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
    .where('shift_id', id)
    .del()
    .returning('*')
}

module.exports = {
  getRequests,
  getUserShifts,
  getOneShift,
  takeShift,
  releaseShift,
  createRequest,
  deleteRequest,
  deleteUserShift
}
