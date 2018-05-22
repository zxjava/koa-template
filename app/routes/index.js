const Router = require('koa-router')
const router = new Router()

// ping
router.get('/ping', (ctx, next) => {
    const {username} = ctx.query
    ctx.succeed({message: `hello, ${username || 'world'}`})
  })

// index.html
router.get('/', async (ctx, next) => {
    await ctx.render('index.ejs', {
      title: 'Welcome To My First NODE Project!'
    })
  })

module.exports = router
