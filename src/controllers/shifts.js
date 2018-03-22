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

const createRequest =  (req, res, next) => {
  const data = model.createRequest(req.body)
  console.log('ddddddd', data)
  if (data.errors) {
    
    return next({ status: 400, message: `Could not create new request`, errors: data.errors })
  }
  
  data
    .then(result => {
      console.log('result in controller', result)
      res.status(201).json({ result })
    })
}

const deleteRequest = (req, res) => {
  console.log('fffffff', req.params)
  const data = model.deleteRequest(req.params.id)

  if (data.errors) {
    return next({ status: 400, message: `Could not create new request`, errors: data.errors })
  }

  data
    .then(result => {
      console.log('tttttt', result)
      if(result === 0) {
         res.status(404).json({error: {message: 'Could not delete request', errors: 'Request id not found'}})
      } else {
      res.status(204).json({ result })
      }
    })
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
  createRequest,
  deleteRequest,
  deleteShift
}
