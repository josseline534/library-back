const dotenv = require('dotenv')

dotenv.config()

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  secretKey: process.env.SECRET_KEY
}

module.exports = { config }
