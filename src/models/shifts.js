const shifts = require('../../queries/main')

const getRequests = () => {
  console.log('getRequests models');
  const requests = shifts.getRequests()
  return requests
  .then(result => {
    return result
  })
}

const getUserShifts = () => {
  console.log('getUserShifts models');
  const userShifts = shifts.getUserShifts()
  return userShifts
  .then(result => {
    return result
  })
}

function getById(id) {}

function create() {}

function changeShift(id, body) {

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
  getById,
  createRequest,
  deleteRequest,
  deleteUserShift
}
