const mongoose = require('mongoose')
const Schema = mongoose.Schema

const truckSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String }
})

module.exports = truckSchema
