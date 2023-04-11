const express = require('express')
const product = require('../controllers/product.controller')

let multer = require('multer');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.fieldname + '-' + file.originalname)
    }
});

let upload = multer({ storage: storage });

const router = express()

router.post('/create', upload.single('image'), product.create)
router.post('/update', product.update)
router.get('/', product.findAll)
router.get('/:id', product.findOne)
router.post('/delete', product.delete)

module.exports = router