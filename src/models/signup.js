const login = require('../../queries/main')

const createAcct = (body) => {

  console.log('body signup model', body)
  const first_name = body.first_name
  const last_name = body.last_name
  const email = body.email
  const password = body.password

  console.log('first name', first_name)
  console.log('last name', last_name)
  console.log('email', email)
  console.log('password', password)

  const signupRes = login.createAcct(first_name, last_name, email, password)

  return signupRes
    .then(result => {
      console.log('rrreeeesult in signup model', result)
      return result[0]
    })
}

module.exports = { createAcct }
