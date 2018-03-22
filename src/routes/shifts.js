const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/shifts')

console.log('in routes');

router.get('/', ctrl.getRequests)
router.get('/user-shifts', ctrl.getUserShifts)
router.get('/:id', ctrl. getById)
router.post('/requests', ctrl.createRequest)
router.put('/:id', ctrl.changeShift)
router.delete('/user-shifts/:id', ctrl.deleteUserShift)
router.delete('/requests/:id', ctrl.deleteRequest)

module.exports = router
