const shifts = require('../../queries/shifts')
const jwt = require('jsonwebtoken');

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
  const shift_id = body.shift_id
  const employee_id = body.employee_id
  const userId = body.userId
  const updatedShift = shifts.updateEmployeesShifts(shift_id, employee_id, userId)
  return updatedShift
    .then(result => {
      return result[0]
    })
}

module.exports = {
  getEmployeeShifts,
  updateEmployeesShifts,
}
