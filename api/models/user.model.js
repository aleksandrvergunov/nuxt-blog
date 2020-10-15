const { model, Schema } = require('mongoose')

const userSchema = new Schema({
  login: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true,
    minLength: 6
  }
})

module.exports = model('users', userSchema)
