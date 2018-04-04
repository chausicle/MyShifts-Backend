const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/shifts')


router.get('/', verifyToken, ctrl.getEmployeeShifts)
router.get('/user-shifts', ctrl.getUserShifts)
router.get('/:id', ctrl.getOneShift)
router.post('/user-shifts', ctrl.takeShift)
router.patch('/user-shifts/:id', ctrl.releaseShift)

router.delete('/user-shifts/:id', ctrl.deleteUserShift)


const verifyToken = (req, res, next) => {
  const secret = 'meow'

}


module.exports = router
