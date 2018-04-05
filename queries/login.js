const knex = require('./db')
const bcrypt = require('bcryptjs');

const checkLogin = (email, password) => {
  console.log(email);
  console.log(password);
  return knex('employees')
  .select('password', 'id')
  .where({ email })
  .then (result => {
    // console.log(result);
    if (result.length === 0) {
      return false
    } else if (bcrypt.compareSync(password, result[0].password) === true) {
      // console.log(result[0].id, "this is the knex employee id");
      return result[0].id
    } else {
      return false
    }
  })
}

module.exports = { checkLogin }