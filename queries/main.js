const knex = require('./db')

getRequests = () => {
  console.log("in main.js");
  return knex('requests')
    .select('')
}

getUserShifts = () => {
  return knex('user_shifts')
    .select('')
}

getById = () => {

}

create = () => {

}

changeShift = () => {

}

deleteUserShift = (id) => {
  console.log(id, "knex id");
  return knex('user_shifts')
    .delete()
    .returning('*')
    .where({ id })
}

module.exports = {
  getRequests,
  getUserShifts,
  getById,
  create,
  changeShift,
  deleteUserShift
}
