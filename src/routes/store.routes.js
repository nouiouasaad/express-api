const express = require('express')
const store = require('../controllers/store.controller')

const router = express()

router.post('/create', store.create)
router.post('/update', store.update)
router.post('/delete', store.delete)

module.exports = router