const knex = require('./db')

const getRequests = () => {
  console.log("in main.js");
  return knex('requests')
    .select('')
}

const getUserShifts = () => {
  return knex('user_shifts')
    .select('')
}

const getById = () => {

}

const createRequest = () => {

}

const changeShift = () => {

}

const deleteUserShift = (id) => {
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
  createRequest,
  deleteRequest,
  changeShift,
  deleteUserShift
}
