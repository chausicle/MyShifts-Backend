const shifts = require('../../queries/shifts')
const requests = require('../../queries/requests')
const jwt = require('jsonwebtoken');
const sgMail = require('@sendgrid/mail');
const emailHandler = require('./email')

const getEmployeeShifts = (headers) => {
  const token = headers.authorization
  const decoded = jwt.decode(token)
  const employee_id = decoded.sub.id
  const employeeShifts = shifts.getEmployeeShifts(employee_id)
   return employeeShifts
    .then(allShifts => {
      allShifts.forEach(shift => {
          shift.employee_id = employee_id
      })
      return allShifts
    })
}

const updateEmployeesShifts = (body) => {
  console.log(body);
  const shift_id = body.shift_id
  const employee_id = body.employee_id
  const userId = body.userId
  const start = body.startTime
  const date = body.currentDate
  console.log(start, date);
  const updatedShift = shifts.updateEmployeesShifts(shift_id, employee_id, userId)
  return updatedShift
    .then(result => {
      emailHandler.processShiftEmail(employee_id, shift_id, userId, start, date)
      return result[0]
    })
}



module.exports = {
  getEmployeeShifts,
  updateEmployeesShifts,
}
