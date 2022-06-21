const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const ejs = require('ejs')
const pathJoin = require('path').join

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(pathJoin(__dirname, 'public')))

app.set('view engine', 'ejs')

const PORT = process.env.PORT || 3000;

// routes
const Collections = require('./routes/BookCollections')

app.use('/collections', Collections)

// db 
const connectDB = require('./db/connection')

// connect to db & start server 
const start = async ()=> {
  try {
    await connectDB()
    app.listen(PORT, () => {
      console.log(`Listenig on port: http://localhost:${PORT}`)})
  } catch (error) {
    console.log(error)
  }
}

start()