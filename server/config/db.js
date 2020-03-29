const mongoose = require('mongoose')
const config = require('./config')

const Mongoose = () => {
  const initialiseMongoConnection = () => {
    return new Promise((resolve, reject) => {
      mongoose.connect(config.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      })

      const db = mongoose.connection
      db.on('error', err => {
        console.error.bind(console, 'connection error:')
        return reject(err)
      })
      db.on('open', () => {
        // we're connected!
        console.log('Connected to MongoDB...')
        return resolve(mongoose)
      })
    })
  }

  return { initialiseMongoConnection }
}

module.exports = Mongoose
