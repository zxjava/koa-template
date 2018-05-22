const moment = require('moment')

module.exports = async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`${ctx.response.status} [${moment().format('YYYY/MM/DD HH:mm:ss')}] "${ctx.method} ${ctx.url}" ${ctx.response.length} - ${ms}ms`)
}
