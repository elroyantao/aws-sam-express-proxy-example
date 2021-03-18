const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')


const app = express()

// app.use(bodyParser.json())

// app.use(cors())

app.get('/hello-world', (req, res) => {
  res.send('Good morning')
})

app.get('/bye-world', (req, res) => {
  res.send('Good night')
})

// app.use('/interest', interestRoutes)

// app.use(error())

module.exports = app