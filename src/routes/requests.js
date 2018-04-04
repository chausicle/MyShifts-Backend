const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/requests')

router.get('/', ctrl.getRequests)
router.post('/', ctrl.createRequest)
router.delete('/:id', ctrl.deleteRequest)

module.exports = router