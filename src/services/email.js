const sgMail = require('@sendgrid/mail');
const requests = require('../../queries/requests')


const processRequestEmail = (employeeId, start, date) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log(process.env.SENDGRID_API_KEY);

  const data = requests.getEmail(employeeId)
  .then(result => {
   const email = result[0].email
   sendRequestEmail(email, start, date)
 })
}

const sendRequestEmail = (email, start, date) => {
  console.log(email);
  const msg = {
    to: `${email}`,
    from: 'updates@myshifts.us',
    subject: 'MyShifts: You released your shift',
    text: `Notification: Your shift at ${start} on ${date} has been released`,
    html: `<html>
      <head>
        <meta charset="utf-8">
        <title>MyShifts Notification</title>
        <style media="screen">
          body {
            font-size: 14px;
            margin: 2em;
          }

          #container {
            display: grid;
            padding: 1rem;
            grid-template-columns: 200px 400px;
            border: 1px solid;
          }

          img {
            height: 200px;
            width: 200px;
          }


          #small {
            font-size: .8em;
            margin: 1em 0 1em 0;
          }

          #links {
            font-size: .8em;
            margin: 4em 0 1em 0;
          }

          #header {
            margin-top: 1.6em;
          }

          a {
            color: dimgrey;
          }

          div {
            background-color: #f9f9f9;
          }
        </style>
      </head>
      <body>
        <div id="container"><div><img src="https://i.imgur.com/rKh4A38.png"></div>
        <div id="header"><strong>Your shift at ${start} on ${date} has been released.</strong>
        <div id="small">If this is incorrect, please go to your <a href="http://myshifts.us" target="blank">myShifts</a> app and make the necessary changes.</div>
        <div id="links"><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=unsubscribe@myshifts.us&subject=Don%27t%20send%20me%20stuff" target="blank">Unsubscribe</a>  |  <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=unsubscribe@myshifts.us?subject=Halp!" target="blank"> Contact Us</a></div>
        </div>

        </div>
      </body>
    </html>`,
  };
  sgMail.send(msg)
  console.log('message sent');
}

const processShiftEmailForUser = (employee_id, shift_id, userId, start, date) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log(process.env.SENDGRID_API_KEY);

  const data = requests.getEmail(userId)
  .then(result => {
   const email = result[0].email
   sendShiftEmailForUser(email, start, date)
 })
}

const sendShiftEmailForUser = (email, start, date) => {
  console.log(email);
  const msg = {
    to: `${email}`,
    from: 'updates@myshifts.us',
    subject: 'MyShifts: You added a shift to your schedule',
    text: `Notification: You added the shift at ${start} on ${date} to your schedule.`,
    html: `<html>
      <head>
        <meta charset="utf-8">
        <title>MyShifts Notification</title>
        <style media="screen">
          body {
            font-size: 14px;
            margin: 2em;
          }

          #container {
            display: grid;
            padding: 1rem;
            grid-template-columns: 200px 400px;
            border: 1px solid;
          }

          img {
            height: 200px;
            width: 200px;
          }


          #small {
            font-size: 1em;
            margin: 1em 0 1em 0;
          }

          #links {
            font-size: 1em;
            margin: 4em 0 1em 0;
          }

          #header {
            margin-top: 1.6em;
          }

          a {
            color: dimgrey;
          }

          div {
            background-color: #f9f9f9;
          }
        </style>
      </head>
      <body>
        <div id="container"><div><img src="https://i.imgur.com/rKh4A38.png"></div>
        <div id="header"><strong>You added the shift at ${start} on ${date} to your schedule.</strong>
        <div id="small">If this is incorrect, please go to your <a href="http://myshifts.us" target="blank">myShifts</a> app and make the necessary changes.</div>
        <div id="links"><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=unsubscribe@myshifts.us&subject=Don%27t%20send%20me%20stuff" target="blank">Unsubscribe</a>  |  <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=unsubscribe@myshifts.us?subject=Halp!" target="blank"> Contact Us</a></div>
        </div>

        </div>
      </body>
    </html>`,
  };
  sgMail.send(msg)
  console.log('message sent');
}

const processShiftEmailForEmployee = (employee_id, shift_id, userId, start, date) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log(process.env.SENDGRID_API_KEY);

  const data = requests.getEmail(employee_id)
  .then(result => {
   const email = result[0].email
   sendShiftEmailForEmployee(email, start, date)
 })
}

const sendShiftEmailForEmployee = (email, start, date) => {
  console.log(email);
  console.log(start, date, 'in sendShiftEmailForEmployee');
  const msg = {
    to: `${email}`,
    from: 'updates@myshifts.us',
    subject: 'MyShifts: Your shift has been taken',
    text: `Notification: Your shift at ${start} on ${date} has been taken.`,
    html: `<html>
      <head>
        <meta charset="utf-8">
        <title>MyShifts Notification</title>
        <style media="screen">
          body {
            font-size: 14px;
            margin: 2em;
          }

          #container {
            display: grid;
            padding: 1rem;
            grid-template-columns: 200px 400px;
            border: 1px solid;
          }

          img {
            height: 200px;
            width: 200px;
          }


          #small {
            font-size: 1em;
            margin: 1em 0 1em 0;
          }

          #links {
            font-size: 1em;
            margin: 4em 0 1em 0;
          }

          #header {
            margin-top: 1.6em;
          }

          a {
            color: dimgrey;
          }

          div {
            background-color: #f9f9f9;
          }
        </style>
      </head>
      <body>
        <div id="container"><div><img src="https://i.imgur.com/rKh4A38.png"></div>
        <div id="header"><strong>Your shift at ${start} on ${date} has been taken.</strong>
        <div id="small">If this is incorrect, please go to your <a href="http://myshifts.us" target="blank">myShifts</a> app and make the necessary changes.</div>
        <div id="links"><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=unsubscribe@myshifts.us&subject=Don%27t%20send%20me%20stuff" target="blank">Unsubscribe</a>  |  <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=unsubscribe@myshifts.us?subject=Halp!" target="blank"> Contact Us</a></div>
        </div>

        </div>
      </body>
    </html>`,
  };
  sgMail.send(msg)
  console.log('message sent');
}

module.exports = {
  processRequestEmail,
  sendRequestEmail,
  processShiftEmailForUser,
  sendShiftEmailForUser,
  processShiftEmailForEmployee,
  sendShiftEmailForEmployee
}
