// const { model } = require('mongoose');
const mongoose = require('mongoose')

const userInfoSchema = mongoose.Schema({
  email: String,
  password: String
})

const User = mongoose.model('User', userInfoSchema);


module.exports = User;