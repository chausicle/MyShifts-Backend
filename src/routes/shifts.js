const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/shifts')

router.get('/requests', ctrl.getRequests)
router.get('/user-shifts', ctrl.getUserShifts)
router.get('/:id', ctrl.getOneShift)
router.post('/user_shifts/:id', ctrl.takeShift)
// router.patch('/user_shifts/:id', ctrl.releaseShift)
router.post('/requests', ctrl.createRequest)
router.delete('/user-shifts/:id', ctrl.deleteUserShift)
router.delete('/requests/:id', ctrl.deleteRequest)

module.exports = router
