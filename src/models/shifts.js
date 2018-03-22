
const shifts = require('../../queries/main')

getAll = () => {
  const requests = shifts.getAll()
  return requests
    .then(result => {
      return result
    })
}

function getById(id) {

}

const createRequest = (body) => {
  const errors = []

  const userId = body.user_id
  const shiftId = body.shift_id

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



function deleteShift(id) {

}

module.exports = {
  getAll,
  getById,
  createRequest,
  deleteRequest,
  deleteShift
}
