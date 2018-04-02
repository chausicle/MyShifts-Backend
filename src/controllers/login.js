const model = require('../models/login')

const checkLogin = (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const data = model.checkLogin(email, password)
  data
  .then(result => {
    res.status(200).send( result )
  })
  .catch(err => {
    res.status(403).send( err )
  })
}

module.exports = { checkLogin }
