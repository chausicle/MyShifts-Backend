
const shifts = require('../../queries/main')

const getAll = () => {
  const requests = shifts.getAll()

  return requests
    .then(result => {
      return result
    })
}

const getById = (id) => {

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

const deleteShift = (id) => {

}

module.exports = {
  getAll,
  getById,
  takeShift,
  deleteShift
}
