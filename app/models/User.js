const Sequelize = require('sequelize')
const db = require('./db')

module.exports = db.define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    field: 'id',
    autoIncrement: true
  },
  nickName: {
    type: Sequelize.STRING,
    field: 'nick_name'
  },
  email: {
    type: Sequelize.STRING,
    field: 'email'
  },
  password: {
    type: Sequelize.STRING,
    field: 'password'
  },
  isActive: {
    type: Sequelize.TINYINT,
    field: 'is_active',
    defaultValue: 1
  },
  createTime: {
    type: Sequelize.DATE,
    field: 'create_time'
  },
  updateTime: {
    type: Sequelize.DATE,
    field: 'update_time'
  }
}, {
  tableName: 'user',
  timestamps: false
})
