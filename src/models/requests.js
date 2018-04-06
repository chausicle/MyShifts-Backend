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

const processEmail = () => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log(process.env.SENDGRID_API_KEY);

  const data = requests.getEmail(3)
  .then(result => {
   const email = result[0].email
   sendEmail(email)
 })
}

const sendEmail = (email) => {
  console.log(email);
  const msg = {
    to: `${email}`,
    from: 'team@myshifts.us',
    subject: 'MyShifts: You have created a request',
    text: 'Notification: Your shift at 10:00 on 4/4/2018 has been released for the taking',
    html: `<html>
    <head>
      <meta charset="utf-8">
        <title>MyShifts Notification</title>
        <style media="screen">
          body {
            background-color: #f9f9f9;
            justify-content: center;
            text-align: center;
            font-size: 1.4em;
            margin: 2em;
          }

          #container {
            display: grid;
            grid-template-rows: 100px 200px;
          }

          img {
            height: 200px;
            width: 200px;
          }
        </style>
      </head>
      <body>
        <div id="container"><div><strong>Your shift at :time: on :date: has been :action:</strong></div>
        <div><img src="https://i.imgur.com/XCyP6O1.png"></div></div>
      </body>
    </html>`,
  };
  sgMail.send(msg);
  console.log('message sent');
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
    const newShift = requests.createRequest(employeeId, shiftId, start, date )
    return newShift
      .then(result => {
        processEmail()
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
