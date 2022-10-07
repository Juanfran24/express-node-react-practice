require('dotenv').config();

module.exports = {
  JWT_KEY: process.env.KEY_SECRET,
  PORT: process.env.PORT
}