import dotenv from 'dotenv'

dotenv.config({ path: './config/config.env' })

export default {
  port: process.env.PORT,
  nodeEnvironment: process.env.NODE_ENV,
  mongoURI: process.env.MONGOURI
}
