const express = require('express')
const category = require('../controllers/category.controller')

const router = express()

router.post('/create', category.create)
router.put('/update/:id', category.update)

router.get('/', category.findAll)
router.delete('/delete', category.deleteMany)

module.exports = router