const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Mongoose = require('./config/db')

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json({ extended: true }))


// Routes
app.use('/api/v1/mentors', require('./routes/mentor'))

const PORT = process.env.PORT || 5000

const startServer = async () => {
  await Mongoose().initialiseMongoConnection()
  app.listen(PORT, () => {
    console.log(`App started on PORT ${PORT}`)
  })
}

startServer()