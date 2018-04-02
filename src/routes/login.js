const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/login')

router.post('/', ctrl.checkLogin)

module.exports = router
