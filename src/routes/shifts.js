const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/shifts')

console.log('in routes');

router.get('/', ctrl.getAll)
router.get('/:id', ctrl. getById)
router.post('/requests', ctrl.createRequest)

router.delete('/:id', ctrl.deleteShift)
router.delete('/requests/:id', ctrl.deleteRequest)

module.exports = router
