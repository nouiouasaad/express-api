const express = require('express')
const size = require('../controllers/size.controller')

const router = express()

router.post('/create', size.create)
router.put('/update/:id', size.update)

router.get('/', size.findAll)
router.delete('/delete', size.deleteMany)

module.exports = router