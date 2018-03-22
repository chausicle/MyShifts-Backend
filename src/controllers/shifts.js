const model = require('../models/shifts')

const getRequests = (req, res, next) => {
  console.log('were in controllers');
  const data = model.getRequests()
  console.log('data in controllers', data);
  data
  .then(result => {
    res.status(200).json({ result })
  })
}

const getUserShifts = (req, res, next) => {
  console.log("user shifts in controllers");
  const data = model.getUserShifts()
  data
  .then(result => {
    res.status(200).json( { result })
  })
}

function getById(req, res, next) {
  const id = req.params.id
  const data = model.getById(id)
  if (result.errors) {
    res.status(404).json({ error: { message: `Could not find shift by ID`, errors: result.errors} })
  } else {
    res.status(200).json({ data })
  }
}

function createRequest (req, res, next) {
  const result = model.create(req.body)
  if (result.errors) {
    return next({ status: 400, message: `Could not create new post`, errors: result.errors })
  }
  res.status(201).json({ data: result })
}

function changeShift (req, res, next) {
  const id = req.params.id
  const body = req.body
  const data = model.changeShift(id, body)
  if (result.errors) {
    res.status(404).json({ error: {message: `Could not find shift`, errors: result.errors} })
  } else {
    res.status(200).json({ data })
  }
}

const deleteUserShift = (req, res, next) => {
  const id = Number(req.params.id)
  const data = model.deleteUserShift(id)
    data.then(result => {
      if (result.length === 0) {
        res.status(404).json( {error: `ID ${id} not found`})
      } else {
        res.status(200).json( { message: `Sucessfully deleted user_shifts ${id}`})
    }
    })
}


module.exports = {
  getRequests,
  getUserShifts,
  getById,
  createRequest,
  deleteRequest,
  deleteUserShift
}
