const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/shifts')


router.get('/', ctrl.getEmployeeShifts)
router.get('/user-shifts', ctrl.getUserShifts)
router.get('/:id', ctrl.getOneShift)
router.post('/user-shifts', ctrl.takeShift)
router.patch('/', ctrl.updateEmployeesShifts)
router.delete('/user-shifts/:id', ctrl.deleteUserShift)


const verifyToken = (req, res, next) => {
  const secret = 'meow'

}


module.exports = router
