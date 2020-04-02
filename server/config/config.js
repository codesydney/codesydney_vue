const dotenv = require('dotenv')

dotenv.config({ path: './config/config.env'})

module.exports = {
  mongoURI: process.env.MONGOURI,
  nodeEnvironment: process.env.NODE_ENV, 
  port: process.env.PORT,
}