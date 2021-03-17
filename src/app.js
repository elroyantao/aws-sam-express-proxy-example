import express from 'express'
// import bodyParser from 'body-parser'
// import cors from 'cors'


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

export default app