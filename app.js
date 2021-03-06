const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(cors())
app.use(bodyParser.json())
app.disable('x-powered-by')
if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))

const shiftsPath = require('./src/routes/shifts')
const requestsPath = require('./src/routes/requests')
const signupPath = require('./src/routes/signup')
const loginPath = require('./src/routes/login')

app.use('/shifts', shiftsPath)
app.use('/requests', requestsPath)
app.use('/signup', signupPath)
app.use('/login', loginPath)

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' }})
})

const listener = () => console.log(`Listening on port ${port}`)
app.listen(port, listener)

module.exports = app
