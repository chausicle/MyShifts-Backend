//import { request } from 'http';

const requests = require('../../queries/requests')

// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
const emailHandler = require('./email')


const getRequests = () => {
  console.log('fffffffff')
  const allRequests = requests.getRequests()
  return allRequests
    .then(result => {
    return result
  })
}





const createRequest = (body) => {
  const errors = []
  const employeeId = body.employee_id
  const shiftId = body.shift_id
  const start = body.start
  const date = body.date

  if(!employeeId || !shiftId || !start || !date) {
    errors.push('Paramaters employee_id, shift_id, start, and date are required')
    return { errors }
  } else {
    const newShift = requests.createRequest(employeeId, shiftId, start, date)
    return newShift
      .then(result => {
        emailHandler.processRequestEmail(employeeId, start, date)
        return result[0]
    })
  }
}

const deleteRequest = (id) => {
  const errors = []

  if(!id) {
    errors.push('Request id is required')
  }
  const deleteReq = requests.deleteRequest(id)
  return deleteReq
    .then(result => {
      return result
    })
}

module.exports = {
  getRequests,
  createRequest,
  deleteRequest
}
