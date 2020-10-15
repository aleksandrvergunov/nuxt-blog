const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Require API routes
const users = require('./routes/users')
const test = require('./routes/test')
const authRoutes = require('./routes/auth.routes')
const keys = require('./keys')
const app = express()

mongoose.connect(keys.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.log(error))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Import API Routes
app.use(users)
app.use(test)
app.use('/auth', authRoutes)

module.exports = app
