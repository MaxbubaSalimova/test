const express = require('express')

const router = express.Router()

const {addCategory, getCategoryById, deleteCategoryById} = require('../controllers/category')

router.post('/add', addCategory)
router.get('/:id', getCategoryById)
router.delete('/:id', deleteCategoryById)

module.exports = router ;