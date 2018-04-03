const db = require('../../queries/main')
const jwt = require('jsonwebtoken')

const checkLogin = (email, password) => {
  const auth = db.checkLogin(email, password)
  return auth
    .then(result => {
      if (result === false) {
        console.log('we got false in model');
        return result.error = 'F'
      } else {
        console.log('we got a match in model');
        const token = jwt.sign({ email, id: result.id }, 'meow')
        console.log(token);
        return token
      }
    })
}

module.exports = { checkLogin }
