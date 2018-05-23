const Sequelize = require('sequelize')
const path = require('path')
const db = new Sequelize('main', null, null, {
  dialect: 'sqlite',
  storage: path.join(__dirname, '../../sqlite.db'),
  pool: {
    max: 40,
    min: 10,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
})

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  }, err => {
    console.log('Unable to connect to the database:', err)
  })

module.exports = db
