const Router = require('koa-router')
const router = new Router()

// ping
router.get('/ping', (ctx, next) => {
    ctx.succeed({message: `hello, world`, query: ctx.query})
  })

// index.html
router.get('/', async (ctx, next) => {
    await ctx.render('index.ejs', {
      title: 'Welcome To My First NODE Project!'
    })
  })

module.exports = router
