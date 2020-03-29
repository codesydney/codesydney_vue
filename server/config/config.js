const dotenv = require('dotenv')

dotenv.config({ path: './config/config.env' })

module.exports = {
  mongoURI: process.env.MONGOURI,
  port: process.env.PORT,
  nodeEnvironment: process.env.NODE_ENV
}
