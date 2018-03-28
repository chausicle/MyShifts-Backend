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

const takeShift = (params) => {
  let result
  let errors = []
  const shift_id = params.id

  if (isNaN(Number(shift_id))) {
    errors.push(`Cannot find id ${shift_id}`)

    return result = {
      status: 404,
      message: `Not Found`,
      errors
    }
  }
  else {
    const addedShift = shifts.takeShift(shift_id)
    return addedShift
      .then(createdShift => {
        return createdShift[0]
      })
  }
}

const releaseShift = (params, body) => {
  const shift_id = params.id
  const request_id = body.request_id
}

const createRequest = (body) => {
  const errors = []

  const userId = body.employee_id
  const shiftId = body.shift_id
  const start = body.start
  const date = body.date

  if(!userId || !shiftId) {
    errors.push('Both user id and shift id are required')
    return { errors }
  } else {
    const newShift = shifts.createRequest(userId, shiftId)
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
