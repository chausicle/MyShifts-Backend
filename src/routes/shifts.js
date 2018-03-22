const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/shifts')

router.get('/', ctrl.getAll)
router.get('/:id', ctrl. getById)
router.post('/user_shifts/:id', ctrl.takeShift)
router.delete('/:id', ctrl.deleteShift)

module.exports = router
