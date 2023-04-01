const express = require('express')
const product = require('../controllers/product.controller')

const router = express()

router.post('/create', product.create)
router.post('/update', product.update)
router.get('/', product.findAll)
router.get('/:id', product.findOne)
router.post('/delete', product.delete)

module.exports = router