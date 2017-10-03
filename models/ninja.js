const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create ninja Schema and model
const NinjaSchema = new Schema({
  name: {
    type: String,
    requires: [true, 'Name field is requires']
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  }
  //add in geo location
})

//creating the model
const Ninja = mongoose.model('ninja', NinjaSchema)

module.exports = Ninja
