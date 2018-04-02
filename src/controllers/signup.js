const model = require('../models/signup')

const createAcct = (req, res) => {

  console.log('req body login ctrl', req.body)
  const data = model.createAcct(req.body)
console.log('ddddddata', data)
  data
    .then(result => {
      console.log('result in login ctrl', result)
      res.status(201).send( result )
    })
}

module.exports = { createAcct }
