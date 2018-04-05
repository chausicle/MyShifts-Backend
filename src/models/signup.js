const signup = require('../../queries/signup')

const createAcct = (body) => {
  const first_name = body.first_name
  const last_name = body.last_name
  const email = body.email
  const password = body.password
  const signupRes = signup.createAcct(first_name, last_name, email, password)

  return signupRes
    .then(result => {
      return result[0]
    })
}

module.exports = { createAcct }
