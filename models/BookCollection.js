const mongoose = require('mongoose')
const { Schema } = mongoose

const BookCollectionSchema = new Schema({
  name: String,
  description: String,
  Books:{
    _id: Number,
    title: String,
    authors: String
  },
  date: Date, 
})

const BookCollection = mongoose.model('bookCollection', BookCollectionSchema)

module.exports = BookCollection