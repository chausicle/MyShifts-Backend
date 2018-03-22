const model = require('../models/shifts')

getAll = (req, res, next) => {
  console.log('were in controllers');
  const data = model.getAll()
  console.log('data in controllers', data);
  data
  .then(result => {
    res.status(200).json({ result })
  })

}

getById = (req, res, next) => {
  const id = req.params.id
  const data = model.getById(id)
  if (result.errors) {
    res.status(404).json({ error: { message: `Could not find shift by ID`, errors: result.errors} })
  } else {
    res.status(200).json({ data })
  }
}

takeShift = (req, res, next) => {
  const data = model.takeShift(req.params)

  if (data.errors) {
    return next({
      status: data.status,
      message: data.message,
      errors: data.errors
    })
  }

  data.then(result => {
    res.status(201).json({ data: result })
  })
}

changeShift = (req, res, next) => {
  const id = req.params.id
  const body = req.body
  const data = model.changeShift(id, body)
  if (result.errors) {
    res.status(404).json({ error: {message: `Could not find shift`, errors: result.errors} })
  } else {
    res.status(200).json({ data })
  }
}

deleteShift = (req, res, next) => {
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
  takeShift,
  changeShift,
  deleteShift
}
