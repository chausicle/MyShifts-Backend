const knex = require('./db')

const getRequests = () => {
  console.log('In getRequest queries')
  // get requests with nested employees
  let result
  return knex('requests')
    .select('*')
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

module.exports = {
  getRequests,
  createRequest,
  deleteRequest
}