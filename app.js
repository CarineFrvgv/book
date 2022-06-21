const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const ejs = require('ejs')
const pathJoin = require('path').join

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(pathJoin(__dirname, 'public')))

app.set('view engine', 'ejs')

const PORT = process.env.PORT || 3000;


//================connection to db================
require('./db/connection')


app.listen(PORT, () => 
  console.log(`Listenig on port: http://localhost:${PORT}`))