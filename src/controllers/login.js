const model = require('../models/login')

const checkLogin = (req, res) => {
  const email = req.body.email
  const password = req.body.password
  // console.log(email, password, "contrller");
  const data = model.checkLogin(email, password)
  data
    .then(result => {
      // console.log(result, 'result in controller login');
      if (result.error) {
        res.sendStatus(403)
      } else {
        res.set({'Access-Control-Expose-Headers': 'Authorization',
                'Authorization': `${result}`})
        .send('passwords match, token in Authorization header')
    }
  })
}

module.exports = { checkLogin }
