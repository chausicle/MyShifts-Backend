const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/shifts')

console.log('in routes');

router.get('/', ctrl.getRequests)
router.get('/user-shifts', ctrl.getUserShifts)
router.get('/:id', ctrl. getById)
router.post('/', ctrl.create)
router.put('/:id', ctrl.changeShift)
router.delete('/user-shifts/:id', ctrl.deleteUserShift)

module.exports = router
