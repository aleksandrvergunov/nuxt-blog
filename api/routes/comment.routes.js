const { Router } = require('express')
const router = Router()
const { create } = require('../controllers/comment.controller')

// comment
router.post('/', create)

module.exports = router
