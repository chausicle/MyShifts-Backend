const db = require('../../queries/main')

const checkLogin = (email, password) => {
  const auth = db.checkLogin(email, password)
  return auth.then(result => {
    console.log('model result = ', result);
    return result
  })
  .catch(error => {
    console.log('model error = ', error);
    return error
  })
}

module.exports = { checkLogin }
