const model = require('../models/shifts')

function getAll (req, res, next) {
  console.log('were in controllers');
  const data = model.getAll()
  console.log('data in controllers', data);
  data
  .then(result => {
    res.status(200).json({ result })
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

function create (req, res, next) {
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

function deleteShift (req, res, next) {
  const id = req.params.id
  const data = model.deleteShift(id)
  if (result.errors) {
    res.status(404).json({error: {message: `Could not delete shift`, errors: result.errors} })
  } else {
    res.status(200).json({ data })
  }
}


module.exports = {
  getAll,
  getById,
  create,
  changeShift,
  deleteShift
}
