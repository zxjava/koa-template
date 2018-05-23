const router = require('koa-router')()
const {User} = _require('@/models')
const md5 = require('md5')
const Sequelize = require('sequelize')
const moment = require('moment')
const _ = require('lodash')

router.post('/create', async ctx => {
  try {
    const {nickName, email, password} = ctx.request.body
    console.log({nickName, email, password: md5(password)})
    await User.create({nickName, email, password: md5(password)})
    ctx.succeed()
  } catch (e) {
    ctx.handleErr(e)
  }
})

router.get('/', async ctx => {
  try {
    let userList = await User.findAll({
      where: {
        createTime: {
          [Sequelize.Op.gte]: moment(moment().format('YYYY-MM-DD'))
        }
      }
    })
    userList = _.map(userList, user => {
      const temp = _.pick(user, ['id', 'nickName', 'email', 'isActive'])
      temp.createTime = moment(user.createTime).format('YYYY-MM-DD HH:mm:ss')
      temp.updateTime = moment(user.updateTime).format('YYYY-MM-DD HH:mm:ss')
      return temp
    })
    ctx.succeed(userList)
  } catch (e) {
    ctx.handleErr(e)
  }
})

module.exports = router
