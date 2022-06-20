const express = require('express')
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => 
  console.log(`Listenig on port: http://localhost:${PORT}`))