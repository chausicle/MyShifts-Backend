const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/signup')

router.post('/', ctrl.createAcct)

module.exports = router