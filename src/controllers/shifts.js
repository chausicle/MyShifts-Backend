const model = require('../models/shifts')


const getRequests = (req, res, next) => {
  const data = model.getRequests()
  data
  .then(result => {
    res.status(200).json({ result })
  })
}

const getUserShifts = (req, res, next) => {
  const data = model.getUserShifts()
  data
  .then(result => {
    res.status(200).json( { result })
  })
}

const getOneShift = (req, res, next) => {
  console.log('------', req.params);

  const data = model.getOneShift(req.params.id)
  data
    .then(result => {
      console.log('result in controller', result)
      res.status(200).json({ result })
    }
  )
}

const getById = (req, res, next) => {
  const id = req.params.id
  const data = model.getById(id)
  if (result.errors) {
    res.status(404).json({ error: { message: `Could not find shift by ID`, errors: result.errors} })
  } else {
    res.status(200).json({ data })
  }
}

const takeShift = (req, res, next) => {
  const data = model.takeShift(req)

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

const createRequest =  (req, res, next) => {
  const data = model.createRequest(req.body)
  if (data.errors) {
    return next({ status: 400, message: `Could not create new request`, errors: data.errors })
  }

  data
    .then(result => {
      res.status(201).json({ result })
    })
}

const deleteRequest = (req, res) => {
  const data = model.deleteRequest(req.params.id)

  if (data.errors) {
    return next({ status: 400, message: `Could not create new request`, errors: data.errors })
  }

  data
    .then(result => {
      if(result === 0) {
         res.status(404).json({error: {message: 'Could not delete request', errors: 'Request id not found'}})
      } else {
      res.status(204).json({ result })
      }
    })
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
  getOneShift,
  takeShift,
  createRequest,
  deleteRequest,
  deleteUserShift
}
