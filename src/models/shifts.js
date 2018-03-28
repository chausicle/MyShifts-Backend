const shifts = require('../../queries/main')

const getRequests = () => {
  const requests = shifts.getRequests()
  return requests
    .then(result => {
    return result
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
      console.log('result in model', result[0])
      return result[0]
    })
}

const takeShift = (req) => {
  let result
  let errors = []
  const shift_id = req.params.id
  const employee_id = req.body.employeeId

  if (isNaN(Number(shift_id))) {
    errors.push(`Invalid id: ${shift_id}`)
    return result = {
      status: 404,
      message: `ID must be an integer`,
      errors
    }
  } else {
    const addedShift = shifts.takeShift(shift_id)
    return addedShift
      .then(res => {
        return res[0]
      })
  }
}

const releaseShift = (params, body) => {
  const shift_id = params.id
  const request_id = body.request_id
}

const createRequest = (body) => {
  const errors = []

  const employeeId = body.employee_id
  const shiftId = body.shift_id
  const start = body.start
  const date = body.date

  if(!employeeId || !shiftId || !start || !date) {
    errors.push('Paramaters employee_id, shift_id, start, and date are required')
    return { errors }
  } else {
    const newShift = shifts.createRequest(employeeId, shiftId, start, date )
    return newShift
      .then(result => {
        return result[0]
    })
  }
}

const deleteRequest = (id) => {
  const errors = []

  if(!id) {
    errors.push('Request id is required')
  }
  const deleteReq = shifts.deleteRequest(id)
  return deleteReq
    .then(result => {
      return result
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
  getRequests,
  getUserShifts,
  getOneShift,
  takeShift,
  createRequest,
  deleteRequest,
  deleteUserShift
}
