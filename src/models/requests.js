const shifts = require('../../queries/main')

const getRequests = () => {
  console.log('WHYYYYYYYY')
  const requests = shifts.getRequests()
  return requests
    .then(result => {
      //console.log('result in getRequests model', result)
    return result
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

module.exports = { getRequests, createRequest, deleteRequest }