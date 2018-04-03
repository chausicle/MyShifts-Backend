const model = require('../models/login')

const checkLogin = (req, res) => {
  const email = req.body.email
  const password = req.body.password
  console.log(email, password, "contrller");
  const data = model.checkLogin(email, password)
  data
  .then(result => {
    console.log(result, 'data in controller login');
    res.set('Auth', `Bearer: ${result}`).send('password correct, JWT set in Auth header')
  })
  .catch(err => {
    console.log(err);
    res.status(403).send( err )
  })
}

module.exports = { checkLogin }
