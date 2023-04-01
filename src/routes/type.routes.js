const express = require('express')
const type = require('../controllers/type.controller')

const router = express()

router.post('/create', type.create)
router.post('/update', type.update)
router.post('/delete', type.delete)

module.exports = router