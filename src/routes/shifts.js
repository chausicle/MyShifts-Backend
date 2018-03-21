const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/shifts')

console.log('in routes');

router.get('/', ctrl.getAll)
router.get('/:id', ctrl. getById)
router.post('/', ctrl.create)
router.put('/:id', ctrl.changeShift)
router.delete('/:id', ctrl.deleteShift)

module.exports = router
