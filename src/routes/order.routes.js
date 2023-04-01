const express = require('express')
const order = require('../controllers/order.controller')

const router = express()

router.post('/create', order.create)
router.post('/update', order.update)
router.get('/', order.findAll)
router.get('/:id', order.findOne)
router.post('/delete', order.delete)

module.exports = router