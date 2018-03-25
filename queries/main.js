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

const deleteUserShift = (id) => {
  return knex('user_shifts')
    .delete()
    .returning('*')
    .where({ id })
}

module.exports = {
  getRequests,
  getUserShifts,
  getOneShift,
  takeShift,
  createRequest,
  deleteRequest,
  deleteUserShift
}
