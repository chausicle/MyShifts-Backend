const model = require('../models/login')

const checkLogin = (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const data = model.checkLogin(email, password)
  data
  .then(result => {
    console.log('controller result = ', result);
    if (!result) res.status(403).send( result )
    res.status(200).send( result )
  })
  .catch(err => {
    console.log('controller err = ', err);
    return res.status(403).send( err )
  })
}

module.exports = { checkLogin }
