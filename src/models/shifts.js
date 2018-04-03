const shifts = require('../../queries/main')

const getRequests = () => {
  // console.log('WHYYYYYYYY')
  const requests = shifts.getRequests()
  return requests
    .then(result => {
    return result
  })
}

const getEmployeeShifts = (params) => {
  const employee_id = params.id
  const employeeShifts = shifts.getEmployeeShifts(employee_id)

   employeeShifts
    .then(allShiftIds => {
      console.log('allShifts', allShiftIds)
      return allShiftIds.map(shift => {
        console.log('sssssss', shift.shift_id)
        return shifts.getOneShift(shift.shift_id)
          .then(result => {
            // const shifts = []
           

            //console.log('shifts in getEmployeeShifts model', shifts)
            console.log('result in getEmployeeShifts in model', result)
            return result
          })
      })
    })
}

const getEmployeeShiftIds = (params) => {


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

const releaseShift = (params, body) => {

  // console.log('params body in releaseShift model', params, body)
  const shift_id = params.id
  const request_id = body.request_id
  const shiftReleased = shifts.releaseShift(shift_id, request_id)

  return shiftReleased
    .then(result => {
      return result[0]

    })
}

const createRequest = (body) => {

  // console.log('body in createRequest model', body)
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
  getEmployeeShifts,
  getUserShifts,
  getOneShift,
  takeShift,
  releaseShift,
  createRequest,
  deleteRequest,
  deleteUserShift
}
