const model = require('../models/shifts')

const getEmployeeShifts = (req, res) => {
  console.log('req.paramssssss', req.headers)
  const data = model.getEmployeeShifts(req.headers)
  data
    .then(result => {
      console.log('result in getEmployessShifts ctrl', result)
      res.status(200).json( result )
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
  // console.log('------', req.params);

  const data = model.getOneShift(req.params.id)
  data
    .then(result => {
      // console.log('result in controller', result)
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
  // console.log('body in takeShift ctrl', req.body)
  const data = model.takeShift(req.body)

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

const releaseShift = (req, res, next) => {
  // console.log('req res in releaseShifty in ctrl', req.params, req.body)
  const data = model.releaseShift(req.params, req.body)

  data.then(result => {
    // console.log('result in release shift in ctrl', result)
    res.status(200).json({ result })
  })

}



const deleteUserShift = (req, res, next) => {
  const id = Number(req.params.id)
  const data = model.deleteUserShift(id)
    data.then(result => {
      if (result === 0) {
        res.status(404).json( {error: `ID ${id} not found`})
      } else {
        res.status(204).json({ result })
    }
    })
}

module.exports = {
  getEmployeeShifts,
  getUserShifts,
  getOneShift,
  takeShift,
  releaseShift,
  deleteUserShift
}
