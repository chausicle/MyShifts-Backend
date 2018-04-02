const db = require('../../queries/main')

const checkLogin = (email, password) => {
  const auth = db.checkLogin(email, password)
  return auth.then(result => {
    return result
  })
}

module.exports = { checkLogin }
