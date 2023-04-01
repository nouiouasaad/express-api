const express = require('express')
const category = require('../controllers/category.controller')

const router = express()

router.post('/create', category.create)
router.post('/update', category.update)
router.post('/delete', category.delete)

module.exports = router