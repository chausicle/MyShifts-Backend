const knex = require('./db')
const bcrypt = require('bcryptjs');

const createAcct = (first_name, last_name, email, password) => {
  return knex('employees')
    .where('email', email)
    .first()
    .then(found => {
      if(found) {
        return ' already present'
      } else {
        const hashedPassword = hash(password, 10)

        return knex('employees')
          .insert({first_name, last_name, email, password: hashedPassword })
          .into('employees')
          .returning('*')
      }
    })
}

const hash = (password, saltRounds) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(`${password}`, salt);
  return `${hash}`
}

module.exports = { createAcct }