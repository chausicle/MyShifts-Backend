const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/shifts')
const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  const secret = 'meow'
  const token = req.headers.authorization
  const verified = jwt.verify(token, secret, (err, result) => {
    // console.log(err,'||', result);
    if (err !== null) {
      return next({ err: {status: 403, message: 'jwt did not verify'} })
    }
  })
  next()
}

router.get('/', verifyToken, ctrl.getEmployeeShifts)
router.get('/user-shifts', ctrl.getUserShifts)
router.get('/:id', ctrl.getOneShift)
router.post('/user-shifts', ctrl.takeShift)
router.patch('/user-shifts/:id', ctrl.releaseShift)

router.delete('/user-shifts/:id', ctrl.deleteUserShift)





module.exports = router
