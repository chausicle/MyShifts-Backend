const knex = require('./db')
const bcrypt = require('bcryptjs');

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

  // console.log(shift_id, start, date, request_id)
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
    .returning('*')
    .del()

}

const createAcct = (first_name, last_name, email, password) => {
  return knex('employees')
    .where('email', email)
    .first()
    .then(found => {
      if(found) {
        return ' already present'
      } else {
        const hashedPassword = hash(password, 10)

        return knex('employees')
          .insert({first_name, last_name, email, password: hashedPassword })
          .into('employees')
          .returning('*')
      }
    })
}

const hash = (password, saltRounds) => {

  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(`${password}`, salt);

  return `${hash}`
}

const checkLogin = (email, password) => {
  return knex('employees')
  .select('password')
  .where('email')
  .then (storedPass => {
    if (!storedPass) return false;
    return bcrypt.compareSync(password, storedPass.password)
  })
}

module.exports = {
  getRequests,
  getUserShifts,
  getOneShift,
  takeShift,
  releaseShift,
  createRequest,
  deleteRequest,
  deleteUserShift,
  createAcct,
  checkLogin
}
