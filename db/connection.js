const mongoose = require('mongoose')

const connectionString = 'mongodb://127.0.0.1/BookManager'

mongoose
  .connect(connectionString, {useNewUrlParser: true})
  .then(() => console.log('CONNECTED TO DB'))
  .catch((err) => console.log(err))