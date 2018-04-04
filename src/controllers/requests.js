const model = require('../models/requests')

const getRequests = (req, res, next) => {

  //console.log('req.body in requests ctrl', req.body)
  const data = model.getRequests()
  data
  .then(result => {
    res.status(200).json({ result })
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
        // console.log('result in deleteRequest in ctrl', typeof result)
      res.status(204).json({ result })
      }
    })
}

module.exports = { getRequests, createRequest, deleteRequest }