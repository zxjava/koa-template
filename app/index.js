/* eslint no-unused-vars: off */
const Koa = require('koa')
const koaBody = require('koa-body')
const mount = require('koa-mount')
const serve = require('koa-static')
const cors = require('@koa/cors')
const path = require('path')
const router = require('./routes')
const views = require('koa-views')
const {logger, contextHelper, auth} = require('./middlewares')

const app = new Koa()

app.use(cors())
app.use(koaBody({
  formLimit: '1mb',
  textLimit: '1mb'
}))

// logger
app.use(logger)
// contextHelper
app.use(contextHelper)
// auth
app.use(auth)

app.use(views(path.join(__dirname, 'views'), {
  map: {
    html: 'ejs'
  }
}))

// api
app.use(router.routes())
app.use(router.allowedMethods())

// static
app.use(mount('/static', serve(path.join(__dirname, './static'), {})))

module.exports = app
