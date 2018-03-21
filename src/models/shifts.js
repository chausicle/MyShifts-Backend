
const shifts = require('../../queries/main')

getAll = () => {
  console.log('were in models');
  const requests = shifts.getAll()
  return requests
    .then(result => {
      console.log('result in models', result);
      return result
    })
}

getById = (id) => {

}

create = () => {

}

changeShift = (id) => {

}

deleteShift = (id) => {

}

module.exports = {
  getAll,
  getById,
  create,
  changeShift,
  deleteShift
}
