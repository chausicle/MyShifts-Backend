//import { request } from 'http';

const requests = require('../../queries/requests')

// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');


const getRequests = () => {
  console.log('fffffffff')
  const allRequests = requests.getRequests()
  return allRequests
    .then(result => {
    return result
  })
}

const createRequest = (body) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'chausicle@gmail.com',
    from: 'team@myshifts.us',
    subject: 'MyShifts: You have created a request',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg);
  console.log('message sent');

  const errors = []
  const employeeId = body.employee_id
  const shiftId = body.shift_id
  const start = body.start
  const date = body.date

  if(!employeeId || !shiftId || !start || !date) {
    errors.push('Paramaters employee_id, shift_id, start, and date are required')
    return { errors }
  } else {
    const newShift = requests.createRequest(employeeId, shiftId, start, date )
    return newShift
      .then(result => {
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
