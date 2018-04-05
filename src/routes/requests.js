const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/requests')
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

router.get('/', verifyToken, ctrl.getRequests)
router.post('/', verifyToken, ctrl.createRequest)
router.delete('/:id', verifyToken, ctrl.deleteRequest)

module.exports = router
