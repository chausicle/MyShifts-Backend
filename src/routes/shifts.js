const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/shifts')

router.get('/requests', ctrl.getRequests)
router.get('/employees-shifts/:id', ctrl.getEmployeeShifts)
router.get('/user-shifts', ctrl.getUserShifts)
router.get('/:id', ctrl.getOneShift)
router.post('/user-shifts', ctrl.takeShift)
router.patch('/user-shifts/:id', ctrl.releaseShift)
router.post('/requests', ctrl.createRequest)
router.delete('/user-shifts/:id', ctrl.deleteUserShift)
router.delete('/requests/:id', ctrl.deleteRequest)

module.exports = router
