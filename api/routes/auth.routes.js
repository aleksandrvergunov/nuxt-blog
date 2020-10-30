const passport = require('passport')
const { Router } = require('express')
const router = Router()

const { login, createUser } = require('../controllers/auth.controller')

// admin
router.post('/admin/login', login)
// api/auth/admin/create
router.post(
  '/admin/create',
  passport.authenticate('jwt', { session: false }),
  createUser
)

module.exports = router
