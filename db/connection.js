const mongoose = require('mongoose')

const connectionString = 'mongodb://127.0.0.1/BookManager'

const connectDB = () => {
  mongoose
    .connect(connectionString, {useNewUrlParser: true})
    .then(() => console.log('CONNECTED TO DB'))
}

module.exports = connectDB