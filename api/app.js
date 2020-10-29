const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const passportStrategy = require('./middleware/passport-strategy')

// Require API routes
const users = require('./routes/users')
const test = require('./routes/test')

const authRoutes = require('./routes/auth.routes')
const postRoutes = require('./routes/post.routes')
const commentRoutes = require('./routes/comment.routes')

const keys = require('./keys')
const app = express()

mongoose.connect(keys.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.log(error))

app.use(passport.initialize())
passport.use(passportStrategy)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Import API Routes
app.use(users)
app.use(test)

app.use('/auth', authRoutes)
app.use('/post', postRoutes)
app.use('/comment', commentRoutes)

module.exports = app
