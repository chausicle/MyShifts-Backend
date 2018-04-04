const shifts = require('../../queries/main')
const jwt = require('jsonwebtoken');



const getEmployeeShifts = (headers) => {
console.log('heeeeeaders', headers)
  const token = headers.authorization
  console.log('ttttttttoken', token)
  const decoded = jwt.decode(token);

  console.log('dddddcoded', decoded)
  console.log('paaaaaayload', decoded.payload)

  const employee_id = decoded.sub.id

  const employeeShifts = shifts.getEmployeeShifts(employee_id)

   return employeeShifts
    .then(allShifts => {
console.log('allshifts in getEmployeeShifts in model', allShifts)
      allShifts.forEach(shift => {
          shift.employee_id = employee_id
      })

      console.log('allShifts in ghetEmployeeShifts in shifts model', allShifts)
      return allShifts
     
    })
}


const getUserShifts = () => {
  const userShifts = shifts.getUserShifts()
  return userShifts
    .then(result => {
    return result
  })
}

const getOneShift = (id) => {
  const oneShift = shifts.getOneShift(id)
  return oneShift
    .then(result => {
      // console.log('result in model', result[0])
      return result[0]
    })
}

const takeShift = (body) => {
  // let result
  let errors = []
  const shift_id = body.shift_id
  const start = body.start
  const date = body.date
  const request_id = body.request_id

  if (isNaN(Number(shift_id))) {
    errors.push(`Invalid id: ${shift_id}`)
    return result = {
      status: 404,
      message: `ID must be an integer`,
      errors
    }
  } else {
    const addedShift = shifts.takeShift(shift_id, start, date, request_id)
    return addedShift
      .then(res => {
        return res[0]
      })
  }
}

const updateEmployeesShifts = (body) => {

  console.log('body in updateEmployeesShifts model', body)
  const shift_id = body.shift_id
  const employee_id = body.employee_id
  const userId = body.userId
  const updatedShift = shifts.updateEmployeesShifts(shift_id, employee_id, userId)

  return updatedShift
    .then(result => {
      console.log('result in updateEmployeesShifts in model', result)
      return result[0]

    })
}



const deleteUserShift = id => {
  const errors = []
  if (!id) {
    errors.push('No ID provided')
    return { errors }
  } else {
    const deleted = shifts.deleteUserShift(id)
    .then(result => {
      return result
    })
    return deleted
 }
}

module.exports = {
  getEmployeeShifts,
  getUserShifts,
  getOneShift,
  takeShift,
  updateEmployeesShifts,
  deleteUserShift
}
